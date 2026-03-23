import { useEffect, useState } from 'react';
import { CreditCard, AlertCircle, CheckCircle, Star, ExternalLink, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { CustomerSubscription, SubscriptionPlan } from '../../types/database';

const intervalLabel: Record<string, string> = { month: 'maand', quarter: 'kwartaal', year: 'jaar' };
const statusLabel: Record<string, string> = { active: 'Actief', paused: 'Gepauzeerd', canceled: 'Opgezegd', past_due: 'Achterstallig' };
const statusColor: Record<string, string> = { active: 'text-green-400 bg-green-400/10', paused: 'text-yellow-400 bg-yellow-400/10', canceled: 'text-gray-400 bg-gray-400/10', past_due: 'text-red-400 bg-red-400/10' };

export default function SubscriptionsPage() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const [subs, setSubs] = useState<CustomerSubscription[]>([]);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [activatingId, setActivatingId] = useState<string | null>(null);
  const [billing, setBilling] = useState<'month' | 'year'>('month');
  const [error, setError] = useState<string | null>(null);

  const paymentSuccess = searchParams.get('success') === 'true';
  const paymentCanceled = searchParams.get('canceled') === 'true';

  useEffect(() => {
    supabase
      .from('subscription_plans')
      .select('*')
      .eq('is_active', true)
      .then(({ data }) => setPlans((data as SubscriptionPlan[]) ?? []));

    if (!user) { setLoading(false); return; }
    supabase
      .from('customer_subscriptions')
      .select('*, subscription_plans(*)')
      .eq('customer_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => { setSubs((data as CustomerSubscription[]) ?? []); setLoading(false); });
  }, [user]);

  const activeIds = new Set(subs.filter(s => s.status === 'active').map(s => s.plan_id));
  const hasActiveSubscription = activeIds.size > 0;

  async function handleActivate(planId: string) {
    if (!user) return;
    setActivatingId(planId);
    setError(null);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setError('Sessie verlopen, log opnieuw in.'); setActivatingId(null); return; }

    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ planId, billingInterval: billing }),
      }
    );

    const json = await res.json() as { url?: string; error?: string };

    if (!res.ok || !json.url) {
      setError(json.error ?? 'Kan betaling niet starten. Probeer opnieuw of neem contact op.');
      setActivatingId(null);
      return;
    }

    window.location.href = json.url;
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-2 border-[#f04e23] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Abonnementen</h1>

      {/* Payment feedback */}
      {paymentSuccess && (
        <div className="flex items-center gap-3 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3 mb-6">
          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
          <p className="text-green-400 text-sm font-bold">Betaling geslaagd! Uw abonnement is geactiveerd.</p>
        </div>
      )}
      {paymentCanceled && (
        <div className="flex items-center gap-3 bg-orange-400/10 border border-orange-400/20 rounded-xl px-4 py-3 mb-6">
          <XCircle className="w-4 h-4 text-orange-400 shrink-0" />
          <p className="text-orange-400 text-sm">Betaling geannuleerd. U kunt het opnieuw proberen.</p>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-3 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-6">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Available plans */}
      {plans.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h2 className="text-white font-black text-sm uppercase tracking-wider">Beschikbare Plannen</h2>
            <div className="flex items-center gap-3 bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${billing === 'month' ? 'text-white' : 'text-gray-500'}`}>Maandelijks</span>
              <button
                onClick={() => setBilling(b => b === 'month' ? 'year' : 'month')}
                aria-label="Schakel facturatieperiode"
                title="Schakel facturatieperiode"
                className={`relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none ${billing === 'year' ? 'bg-[#f04e23]' : 'bg-gray-600'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${billing === 'year' ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
              <span className={`text-xs font-bold uppercase tracking-wider ${billing === 'year' ? 'text-white' : 'text-gray-500'}`}>
                Jaarlijks <span className="text-[#f04e23]">-20%</span>
              </span>
            </div>
          </div>

          {hasActiveSubscription && (
            <div className="flex items-start gap-3 bg-orange-400/10 border border-orange-400/20 rounded-xl px-4 py-3 mb-4">
              <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-orange-400 text-sm">U heeft al een actief abonnement. Zeg uw huidige abonnement eerst op via het <Link to="/contact?subject=opzeggen" className="underline font-bold hover:text-orange-300">contactformulier</Link> voordat u een nieuw plan activeert.</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {plans.map(plan => {
              const isActive = activeIds.has(plan.id);
              const displayPrice = billing === 'year'
                ? Math.round((plan.price / 100) * 0.8)
                : plan.price / 100;
              return (
                <div key={plan.id} className={`relative bg-[#151515] border rounded-2xl p-6 flex flex-col ${isActive ? 'border-green-500/30' : 'border-white/5 hover:border-[#f04e23]/30'} transition-all`}>
                  {isActive && (
                    <span className="absolute top-4 right-4 text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />Actief
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-[#f04e23]" />
                    <h3 className="text-white font-black text-sm uppercase tracking-wider">{plan.name}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1">{plan.description}</p>
                  {plan.features && Array.isArray(plan.features) && (
                    <ul className="mb-4 space-y-1">
                      {(plan.features as string[]).map((f, i) => (
                        <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-[#f04e23] shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div>
                      <span className="text-white font-black text-sm">
                        €{displayPrice.toFixed(2)}
                        <span className="text-gray-500 font-normal text-xs">/maand</span>
                      </span>
                      {billing === 'year' && (
                        <p className="text-gray-600 text-xs line-through">€{(plan.price / 100).toFixed(2)}/maand</p>
                      )}
                    </div>
                    {isActive ? (
                      <span className="text-xs font-bold text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" />Actief</span>
                    ) : hasActiveSubscription ? (
                      <span className="text-xs text-gray-600 italic">Opzeggen vereist</span>
                    ) : (
                      <button
                        onClick={() => handleActivate(plan.id)}
                        disabled={activatingId === plan.id}
                        className="flex items-center gap-1 bg-[#f04e23] hover:bg-[#d43d14] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-colors disabled:opacity-60"
                      >
                        {activatingId === plan.id
                          ? <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin" />
                          : <><ExternalLink className="w-3 h-3" />Activeer</>
                        }
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <h2 className="text-white font-black text-sm uppercase tracking-wider mb-4">Mijn Abonnementen</h2>

      {subs.length === 0 ? (
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-16 text-center">
          <CreditCard className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-white font-bold mb-2">Geen abonnementen</p>
          <p className="text-gray-500 text-sm">Uw abonnementen verschijnen hier zodra u er één heeft afgesloten.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {subs.map(sub => {
            const plan = sub.subscription_plans;
            const price = plan ? (plan.price / 100).toFixed(2) : '0.00';
            const interval = plan ? (intervalLabel[plan.billing_interval] ?? plan.billing_interval) : 'maand';
            return (
              <div key={sub.id} className="bg-[#151515] border border-white/5 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f04e23]/10 rounded-xl flex items-center justify-center shrink-0">
                    <CreditCard className="w-6 h-6 text-[#f04e23]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-white font-black text-sm uppercase tracking-wider">{plan?.name ?? 'Abonnement'}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[sub.status] ?? 'text-gray-400 bg-gray-400/10'}`}>
                        {statusLabel[sub.status] ?? sub.status}
                      </span>
                      {sub.cancel_at_period_end && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full text-orange-400 bg-orange-400/10">Stopt aan einde periode</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{plan?.description ?? ''}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span>€{price} / {interval}</span>
                      <span>Periode: {new Date(sub.current_period_start).toLocaleDateString('nl-NL')} – {new Date(sub.current_period_end).toLocaleDateString('nl-NL')}</span>
                    </div>
                    {plan?.features && Array.isArray(plan.features) && (
                      <ul className="mt-3 space-y-1">
                        {(plan.features as string[]).map((f, i) => (
                          <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#f04e23] rounded-full shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {sub.status === 'active' && !sub.cancel_at_period_end && (
                    <Link
                      to="/contact?subject=opzeggen"
                      className="shrink-0 text-xs font-bold text-gray-500 hover:text-red-400 border border-white/10 hover:border-red-400/30 px-4 py-2 rounded-xl transition-all whitespace-nowrap"
                    >
                      Opzeggen
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
