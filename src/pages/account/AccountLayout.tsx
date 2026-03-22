import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { User, Package, CreditCard, LogOut, ChevronRight, LayoutDashboard, ShoppingBag } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const navItems = [
  { to: '/account', label: 'Overzicht', icon: LayoutDashboard, end: true },
  { to: '/account/orders', label: 'Bestellingen', icon: Package, end: false },
  { to: '/account/subscriptions', label: 'Abonnementen', icon: CreditCard, end: false },
  { to: '/account/shop', label: 'Add-ons & Services', icon: ShoppingBag, end: false },
  { to: '/account/profile', label: 'Mijn Profiel', icon: User, end: false },
];

export default function AccountLayout() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  const displayName = profile?.full_name ?? profile?.email;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-[#151515] border border-white/5 rounded-3xl p-6 sticky top-28">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#f04e23]/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#f04e23]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-white font-bold text-sm truncate">{displayName ?? 'Mijn Account'}</p>
                  <p className="text-gray-500 text-xs truncate">{profile?.email}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map(({ to, label, icon: Icon, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'bg-[#f04e23]/10 text-[#f04e23]'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{label}</span>
                    <ChevronRight className="w-3 h-3 opacity-40" />
                  </NavLink>
                ))}

                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-red-400 hover:bg-red-400/5 transition-all duration-200 mt-4 border-t border-white/5 pt-4"
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  <span>Uitloggen</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
