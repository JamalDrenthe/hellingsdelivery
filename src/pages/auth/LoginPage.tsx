import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [magicSent, setMagicSent] = useState(false);
  const [mode, setMode] = useState<'password' | 'magic'>('password');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (mode === 'magic') {
      const { error: err } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/account` } });
      if (err) setError(err.message);
      else setMagicSent(true);
    } else {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) setError(err.message);
      else navigate('/account');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <Link to="/" className="flex items-center justify-center mb-10">
          <img src="/images/hellingsdeliverylogoletters.png" alt="Hellings Delivery" className="h-16 w-auto object-contain" />
        </Link>

        <div className="bg-[#151515] border border-white/5 rounded-3xl p-8">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Inloggen</h1>
          <p className="text-gray-500 text-sm mb-8">Nog geen account? <Link to="/register" className="text-[#f04e23] hover:underline">Registreer hier</Link></p>

          {magicSent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#f04e23]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#f04e23]" />
              </div>
              <p className="text-white font-bold mb-2">Check uw e-mail</p>
              <p className="text-gray-400 text-sm">We hebben een inloglink gestuurd naar <span className="text-white">{email}</span></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">E-mailadres</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="uw@email.nl"
                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
                  />
                </div>
              </div>

              {mode === 'password' && (
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Wachtwoord</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl pl-11 pr-11 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
                    />
                    <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {error && <p className="text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f04e23] hover:bg-[#d43d14] text-white font-bold uppercase tracking-wider text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              >
                {loading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : (
                  <><span>{mode === 'magic' ? 'Stuur Inloglink' : 'Inloggen'}</span><ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMode(m => m === 'password' ? 'magic' : 'password')}
                className="w-full text-gray-500 hover:text-white text-sm transition-colors py-1"
              >
                {mode === 'password' ? 'Inloggen met magic link (geen wachtwoord)' : 'Inloggen met wachtwoord'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
