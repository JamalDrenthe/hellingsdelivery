import { useState, useEffect } from 'react';
import { User, Phone, MapPin, Building, Save, CheckCircle, CreditCard, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import type { BillingAddress } from '../../types/database';

export default function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [kvkNumber, setKvkNumber] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('NL');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profile) return;
    if (profile.full_name) setFullName(profile.full_name);
    if (profile.phone) setPhone(profile.phone);
    if (profile.vat_number) setVatNumber(profile.vat_number);
    if (profile.kvk_number) setKvkNumber(profile.kvk_number);
    if (profile.bank_account) setBankAccount(profile.bank_account);
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
      .update({ full_name: fullName, phone, vat_number: vatNumber, kvk_number: kvkNumber, bank_account: bankAccount, billing_address, updated_at: new Date().toISOString() })
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
              <label htmlFor="fullName" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Volledige naam</label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Jan de Vries"
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="profileEmail" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">E-mailadres</label>
              <input
                id="profileEmail"
                type="email"
                value={profile?.email ?? ''}
                disabled
                className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-gray-500 text-sm cursor-not-allowed"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                <Phone className="inline w-3 h-3 mr-1" />Telefoonnummer
              </label>
              <input
                id="phone"
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
              <label htmlFor="street" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Straat en huisnummer</label>
              <input id="street" type="text" value={street} onChange={e => setStreet(e.target.value)} placeholder="Voorbeeldstraat 1" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Postcode</label>
              <input id="postalCode" type="text" value={postalCode} onChange={e => setPostalCode(e.target.value)} placeholder="1234 AB" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="city" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Stad</label>
              <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Amsterdam" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="country" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Land</label>
              <select id="country" title="Land" value={country} onChange={e => setCountry(e.target.value)} className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors">
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
            <h2 className="text-white font-black text-sm uppercase tracking-wider">Zakelijke Gegevens</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="vatNumber" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">BTW-nummer (optioneel)</label>
              <input id="vatNumber" type="text" value={vatNumber} onChange={e => setVatNumber(e.target.value)} placeholder="NL123456789B01" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="kvkNumber" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                <Hash className="inline w-3 h-3 mr-1" />KVK-nummer (optioneel)
              </label>
              <input id="kvkNumber" type="text" value={kvkNumber} onChange={e => setKvkNumber(e.target.value)} placeholder="12345678" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            </div>
          </div>
        </div>

        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <CreditCard className="w-4 h-4 text-[#f04e23]" />
            <h2 className="text-white font-black text-sm uppercase tracking-wider">Bankgegevens</h2>
          </div>
          <div>
            <label htmlFor="bankAccount" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">IBAN Rekeningnummer (optioneel)</label>
            <input id="bankAccount" type="text" value={bankAccount} onChange={e => setBankAccount(e.target.value.toUpperCase())} placeholder="NL91 ABNA 0417 1643 00" className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm font-mono focus:outline-none focus:border-[#f04e23]/50 transition-colors" />
            <p className="text-gray-600 text-xs mt-2">Gebruikt voor terugbetalingen en zakelijke facturatie.</p>
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
