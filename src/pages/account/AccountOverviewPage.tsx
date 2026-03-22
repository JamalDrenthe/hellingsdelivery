import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, CreditCard, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { Order, CustomerSubscription } from '../../types/database';

const intervalLabel: Record<string, string> = { month: 'maand', quarter: 'kwartaal', year: 'jaar' };
const statusLabel: Record<string, string> = { pending: 'In behandeling', paid: 'Betaald', failed: 'Mislukt', refunded: 'Terugbetaald', active: 'Actief', paused: 'Gepauzeerd', canceled: 'Opgezegd', past_due: 'Achterstallig' };
const statusColor: Record<string, string> = { paid: 'text-green-400 bg-green-400/10', active: 'text-green-400 bg-green-400/10', pending: 'text-yellow-400 bg-yellow-400/10', paused: 'text-yellow-400 bg-yellow-400/10', failed: 'text-red-400 bg-red-400/10', canceled: 'text-gray-400 bg-gray-400/10', past_due: 'text-red-400 bg-red-400/10', refunded: 'text-blue-400 bg-blue-400/10' };

export default function AccountOverviewPage() {
  const { user, profile } = useAuth();
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [activeSubs, setActiveSubs] = useState<CustomerSubscription[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [loadingSubs, setLoadingSubs] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('orders')
      .select('*')
      .eq('customer_id', user.id)
      .order('created_at', { ascending: false })
      .limit(3)
      .then(({ data }) => { setRecentOrders(data ?? []); setLoadingOrders(false); });

    supabase
      .from('customer_subscriptions')
      .select('*, subscription_plans(*)')
      .eq('customer_id', user.id)
      .eq('status', 'active')
      .limit(3)
      .then(({ data }) => { setActiveSubs((data as CustomerSubscription[]) ?? []); setLoadingSubs(false); });
  }, [user]);

  const greeting = profile?.full_name ? `Welkom terug, ${profile.full_name.split(' ')[0]}` : 'Welkom terug';

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white uppercase tracking-tight">{greeting}</h1>
        <p className="text-gray-500 text-sm mt-1">{profile?.email}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Link to="/account/orders" className="bg-[#151515] border border-white/5 hover:border-[#f04e23]/30 rounded-2xl p-6 flex items-center gap-4 transition-all group">
          <div className="w-12 h-12 bg-[#f04e23]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#f04e23]/20 transition-colors">
            <Package className="w-6 h-6 text-[#f04e23]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider">Bestellingen</p>
            <p className="text-gray-500 text-xs mt-0.5">Bekijk uw bestelhistorie</p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#f04e23] ml-auto transition-colors" />
        </Link>

        <Link to="/account/subscriptions" className="bg-[#151515] border border-white/5 hover:border-[#f04e23]/30 rounded-2xl p-6 flex items-center gap-4 transition-all group">
          <div className="w-12 h-12 bg-[#f04e23]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#f04e23]/20 transition-colors">
            <CreditCard className="w-6 h-6 text-[#f04e23]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider">Abonnementen</p>
            <p className="text-gray-500 text-xs mt-0.5">Beheer uw abonnementen</p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#f04e23] ml-auto transition-colors" />
        </Link>
      </div>

      {/* Recent orders */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-black text-sm uppercase tracking-wider">Recente Bestellingen</h2>
          <Link to="/account/orders" className="text-[#f04e23] text-xs font-bold uppercase tracking-wider hover:underline">Alle bestellingen</Link>
        </div>
        <div className="bg-[#151515] border border-white/5 rounded-2xl overflow-hidden">
          {loadingOrders ? (
            <div className="p-8 flex justify-center"><div className="w-6 h-6 border-2 border-[#f04e23] border-t-transparent rounded-full animate-spin" /></div>
          ) : recentOrders.length === 0 ? (
            <div className="p-8 text-center">
              <Package className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Nog geen bestellingen</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center gap-4 p-4">
                  <Clock className="w-4 h-4 text-gray-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold truncate">Bestelling #{order.id.slice(0, 8).toUpperCase()}</p>
                    <p className="text-gray-500 text-xs">{new Date(order.created_at).toLocaleDateString('nl-NL')}</p>
                  </div>
                  <span className="text-white text-sm font-bold">€{(order.total_amount / 100).toFixed(2)}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[order.status] ?? 'text-gray-400 bg-gray-400/10'}`}>{statusLabel[order.status] ?? order.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Active subscriptions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-black text-sm uppercase tracking-wider">Actieve Abonnementen</h2>
          <Link to="/account/subscriptions" className="text-[#f04e23] text-xs font-bold uppercase tracking-wider hover:underline">Alle abonnementen</Link>
        </div>
        <div className="bg-[#151515] border border-white/5 rounded-2xl overflow-hidden">
          {loadingSubs ? (
            <div className="p-8 flex justify-center"><div className="w-6 h-6 border-2 border-[#f04e23] border-t-transparent rounded-full animate-spin" /></div>
          ) : activeSubs.length === 0 ? (
            <div className="p-8 text-center">
              <CreditCard className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Geen actieve abonnementen</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {activeSubs.map(sub => (
                <div key={sub.id} className="flex items-center gap-4 p-4">
                  <CreditCard className="w-4 h-4 text-[#f04e23] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold truncate">{sub.subscription_plans?.name ?? 'Abonnement'}</p>
                    <p className="text-gray-500 text-xs">Verlengt: {new Date(sub.current_period_end).toLocaleDateString('nl-NL')}</p>
                  </div>
                  <span className="text-white text-sm font-bold">€{((sub.subscription_plans?.price ?? 0) / 100).toFixed(2)}/{intervalLabel[sub.subscription_plans?.billing_interval ?? 'month'] ?? 'maand'}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[sub.status] ?? 'text-gray-400 bg-gray-400/10'}`}>{statusLabel[sub.status] ?? sub.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
