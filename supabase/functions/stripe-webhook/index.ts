import Stripe from 'npm:stripe@14';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!);
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new Response('No signature', { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;

  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Webhook signature verification failed';
    return new Response(msg, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.supabase_user_id;
    const planId = session.metadata?.plan_id;
    const billingInterval = (session.metadata?.billing_interval ?? 'month') as string;

    if (!userId || !planId) {
      return new Response('Missing metadata', { status: 400 });
    }

    const now = new Date();
    const end = new Date(now);
    if (billingInterval === 'year') {
      end.setFullYear(end.getFullYear() + 1);
    } else {
      end.setMonth(end.getMonth() + 1);
    }

    await supabase.from('customer_subscriptions').insert({
      customer_id: userId,
      plan_id: planId,
      status: 'active',
      current_period_start: now.toISOString(),
      current_period_end: end.toISOString(),
      payment_provider: 'stripe',
      provider_subscription_id: session.subscription as string,
    });
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as Stripe.Subscription;
    await supabase
      .from('customer_subscriptions')
      .update({ status: 'canceled' })
      .eq('provider_subscription_id', sub.id);
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
