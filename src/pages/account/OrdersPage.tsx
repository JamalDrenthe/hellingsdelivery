import { useEffect, useState } from 'react';
import { Package, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { Order } from '../../types/database';

const statusLabel: Record<string, string> = { pending: 'In behandeling', paid: 'Betaald', failed: 'Mislukt', refunded: 'Terugbetaald' };
const statusColor: Record<string, string> = { paid: 'text-green-400 bg-green-400/10', pending: 'text-yellow-400 bg-yellow-400/10', failed: 'text-red-400 bg-red-400/10', refunded: 'text-blue-400 bg-blue-400/10' };

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('orders')
      .select('*, order_items(*, products(name, type))')
      .eq('customer_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => { setOrders((data as Order[]) ?? []); setLoading(false); });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-2 border-[#f04e23] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Bestellingen</h1>

      {orders.length === 0 ? (
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-16 text-center">
          <Package className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-white font-bold mb-2">Nog geen bestellingen</p>
          <p className="text-gray-500 text-sm">Uw bestellingen verschijnen hier zodra u iets heeft besteld.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map(order => (
            <div key={order.id} className="bg-[#151515] border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === order.id ? null : order.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-[#f04e23]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">#{order.id.slice(0, 8).toUpperCase()}</p>
                  <p className="text-gray-500 text-xs">{new Date(order.created_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[order.status] ?? 'text-gray-400 bg-gray-400/10'}`}>
                  {statusLabel[order.status] ?? order.status}
                </span>
                <span className="text-white font-bold text-sm ml-2">€{(order.total_amount / 100).toFixed(2)}</span>
                {expanded === order.id ? <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />}
              </button>

              <AnimatePresence>
                {expanded === order.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-white/5 pt-4">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Producten</p>
                      {order.order_items && order.order_items.length > 0 ? (
                        <div className="space-y-2">
                          {order.order_items.map(item => (
                            <div key={item.id} className="flex items-center justify-between">
                              <span className="text-gray-300 text-sm">{item.products?.name ?? 'Product'} × {item.quantity}</span>
                              <span className="text-white text-sm font-bold">€{(item.total_price / 100).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 text-sm">Geen productdetails beschikbaar.</p>
                      )}
                      {order.payment_method && (
                        <p className="text-gray-500 text-xs mt-3">Betaalmethode: <span className="text-gray-300">{order.payment_method}</span></p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
