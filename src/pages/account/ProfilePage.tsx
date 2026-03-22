import { useState, useEffect } from 'react';
import { User, Phone, MapPin, Building, Save, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { BillingAddress } from '../../types/database';

export default function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('NL');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profile) return;
    setFullName(profile.full_name ?? '');
    setPhone(profile.phone ?? '');
    setVatNumber(profile.vat_number ?? '');
    const addr = profile.billing_address;
    if (addr) {
      setStreet(addr.street ?? '');
      setCity(addr.city ?? '');
      setPostalCode(addr.postal_code ?? '');
      setCountry(addr.country ?? 'NL');
    }
  }, [profile]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    const billing_address: BillingAddress = { street, city, postal_code: postalCode, country };

    const { error: err } = await supabase
      .from('profiles')
      .update({ full_name: fullName, phone, vat_number: vatNumber, billing_address, updated_at: new Date().toISOString() })
      .eq('id', user.id);

    if (err) {
      setError(err.message);
    } else {
      await refreshProfile();
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setSaving(false);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Mijn Profiel</h1>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal */}
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <User className="w-4 h-4 text-[#f04e23]" />
            <h2 className="text-white font-black text-sm uppercase tracking-wider">Persoonsgegevens</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Volledige naam</label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Jan de Vries"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">E-mailadres</label>
              <input
                type="email"
                value={profile?.email ?? ''}
                disabled
                className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-gray-500 text-sm cursor-not-allowed"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                <Phone className="inline w-3 h-3 mr-1" />Telefoonnummer
              </label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+31 6 12345678"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Billing address */}
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <MapPin className="w-4 h-4 text-[#f04e23]" />
            <h2 className="text-white font-black text-sm uppercase tracking-wider">Factuuradres</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Straat en huisnummer</label>
              <input
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
                placeholder="Voorbeeldstraat 1"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Postcode</label>
              <input
                type="text"
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                placeholder="1234 AB"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Stad</label>
              <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Amsterdam"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Land</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              >
                <option value="NL">Nederland</option>
                <option value="BE">België</option>
                <option value="DE">Duitsland</option>
                <option value="FR">Frankrijk</option>
              </select>
            </div>
          </div>
        </div>

        {/* B2B */}
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <Building className="w-4 h-4 text-[#f04e23]" />
            <h2 className="text-white font-black text-sm uppercase tracking-wider">B2B Gegevens</h2>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">BTW-nummer (optioneel)</label>
            <input
              type="text"
              value={vatNumber}
              onChange={e => setVatNumber(e.target.value)}
              placeholder="NL123456789B01"
              className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
            />
          </div>
        </div>

        {error && <p className="text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-[#f04e23] hover:bg-[#d43d14] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 rounded-xl transition-colors disabled:opacity-60"
        >
          {saving ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : saved ? (
            <><CheckCircle className="w-4 h-4" /><span>Opgeslagen!</span></>
          ) : (
            <><Save className="w-4 h-4" /><span>Opslaan</span></>
          )}
        </button>
      </form>
    </motion.div>
  );
}
