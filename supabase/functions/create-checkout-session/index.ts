import Stripe from 'npm:stripe@14';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!);
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Authenticate user
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Niet geautoriseerd' }), { status: 401, headers: corsHeaders });
    }
    const { data: { user }, error: userError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Niet geautoriseerd' }), { status: 401, headers: corsHeaders });
    }

    const { planId, billingInterval } = await req.json() as { planId: string; billingInterval: 'month' | 'year' };

    // Get plan
    const { data: plan, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();
    if (planError || !plan) {
      return new Response(JSON.stringify({ error: 'Plan niet gevonden' }), { status: 404, headers: corsHeaders });
    }

    // Get or create Stripe customer
    const { data: profile } = await supabase
      .from('profiles')
      .select('email, stripe_customer_id')
      .eq('id', user.id)
      .single();

    let customerId: string = profile?.stripe_customer_id ?? '';
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: profile?.email ?? user.email,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;
      await supabase.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id);
    }

    // Choose price ID (monthly or yearly)
    const priceId: string = billingInterval === 'year'
      ? (plan.stripe_price_id_yearly ?? plan.stripe_price_id)
      : plan.stripe_price_id;

    if (!priceId) {
      return new Response(
        JSON.stringify({ error: 'Stripe prijs niet ingesteld voor dit plan. Neem contact op.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const origin = req.headers.get('origin') ?? 'https://hellingsdelivery.nl';

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['ideal', 'card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${origin}/account/subscriptions?success=true&plan_id=${planId}`,
      cancel_url: `${origin}/account/subscriptions?canceled=true`,
      metadata: {
        supabase_user_id: user.id,
        plan_id: planId,
        billing_interval: billingInterval,
      },
      locale: 'nl',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Onbekende fout';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
