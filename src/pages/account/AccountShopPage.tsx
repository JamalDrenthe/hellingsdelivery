import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Shield, MapPin, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'tracking' | 'verzekering' | 'eyes-ears';
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  badge?: string;
}

const shopItems: ShopItem[] = [
  {
    id: 'tracking-basic',
    name: 'Tracking Basic',
    description: 'Real-time locatie van uw zending op een kaart. Actuele statusupdates per SMS en e-mail.',
    price: 4.95,
    category: 'tracking',
    icon: MapPin,
    features: ['Real-time locatie (GPS)', 'SMS & e-mail updates', 'Track & trace link', 'Bezorgbevestiging'],
  },
  {
    id: 'tracking-premium',
    name: 'Tracking Premium',
    badge: 'Populair',
    description: 'Uitgebreide tracking met live videofeed, temperatuurmeting en gedetailleerde routelog.',
    price: 12.95,
    category: 'tracking',
    icon: Eye,
    features: ['Alles uit Basic', 'Temperatuur & vochtigheidslog', 'Gedetailleerde routegeschiedenis', 'Digitale handtekening bij ontvangst', 'Dashboard-toegang (30 dagen)'],
  },
  {
    id: 'verzekering-standaard',
    name: 'Verzekering Standaard',
    description: 'Dekking tot €10.000 voor uw zending. Ideaal voor waardevolle goederen en documenten.',
    price: 9.50,
    category: 'verzekering',
    icon: Shield,
    features: ['Dekking tot €10.000', 'Schade & diefstal', 'Eenvoudige schademelding', 'Uitbetaling binnen 10 werkdagen'],
  },
  {
    id: 'verzekering-premium',
    name: 'Verzekering Premium',
    badge: 'Aanbevolen',
    description: 'Maximale dekking tot €50.000. Voor kunst, juwelen, juridische documenten en andere exclusieve zendingen.',
    price: 24.95,
    category: 'verzekering',
    icon: Shield,
    features: ['Dekking tot €50.000', 'Schade, diefstal & verlies', 'All-risk dekking', 'Snelle uitbetaling (5 werkdagen)', 'Persoonlijke schadetaxateur'],
  },
  {
    id: 'eyes-ears-basis',
    name: 'Eyes & Ears – Basis',
    description: 'Onze chauffeur fungeert als extra ogen en oren. Rapportage bij aankomst en vertrek met foto-verificatie.',
    price: 19.95,
    category: 'eyes-ears',
    icon: Eye,
    features: ['Foto-verificatie bij ophalen', 'Foto-verificatie bij afleveren', 'Schriftelijk rapport', 'Directe melding bij afwijkingen'],
  },
  {
    id: 'eyes-ears-discreet',
    name: 'Eyes & Ears – Discreet',
    badge: 'Exclusief',
    description: 'Volledig anonieme observatie en rapportage door gecertificeerde chauffeurs. Maximale discretie gegarandeerd.',
    price: 49.95,
    category: 'eyes-ears',
    icon: Eye,
    features: ['Alles uit Basis', 'Volledig geanonimiseerd rapport', 'Versleutelde berichtgeving', 'NDA standaard inbegrepen', 'Beveiligde datadeling', 'Geen digitale sporen'],
  },
];

const categoryLabels: Record<ShopItem['category'], string> = {
  tracking: 'Tracking Upgrades',
  verzekering: 'Verzekeringen',
  'eyes-ears': 'Eyes & Ears',
};

const categoryIcons: Record<ShopItem['category'], React.ComponentType<{ className?: string }>> = {
  tracking: MapPin,
  verzekering: Shield,
  'eyes-ears': Eye,
};

export default function AccountShopPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<ShopItem['category'] | 'all'>('all');

  const categories: (ShopItem['category'] | 'all')[] = ['all', 'tracking', 'verzekering', 'eyes-ears'];

  const filtered = activeCategory === 'all' ? shopItems : shopItems.filter(i => i.category === activeCategory);

  const total = cart.reduce((sum, id) => {
    const item = shopItems.find(i => i.id === id);
    return sum + (item?.price ?? 0);
  }, 0);

  function toggleCart(id: string) {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Add-ons & Services</h1>
          <p className="text-gray-500 text-sm mt-1">Voeg extras toe aan uw rit of zending</p>
        </div>
        {cart.length > 0 && (
          <div className="flex items-center gap-3 bg-[#151515] border border-white/5 rounded-2xl px-5 py-3">
            <ShoppingCart className="w-4 h-4 text-[#f04e23]" />
            <span className="text-white text-sm font-bold">{cart.length} item{cart.length > 1 ? 's' : ''}</span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-white text-sm font-bold">€{total.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => {
          const Icon = cat === 'all' ? ShoppingCart : categoryIcons[cat];
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#f04e23] text-white'
                  : 'bg-[#151515] border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              <Icon className="w-3 h-3" />
              {cat === 'all' ? 'Alles' : categoryLabels[cat]}
            </button>
          );
        })}
      </div>

      {/* Products grid */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {filtered.map(item => {
          const Icon = item.icon;
          const inCart = cart.includes(item.id);
          return (
            <div
              key={item.id}
              className={`relative bg-[#151515] border rounded-2xl p-6 flex flex-col transition-all ${inCart ? 'border-[#f04e23]/40' : 'border-white/5 hover:border-white/10'}`}
            >
              {item.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold text-[#f04e23] bg-[#f04e23]/10 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#f04e23]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{categoryLabels[item.category]}</p>
                  <h3 className="text-white font-black text-sm uppercase tracking-wide">{item.name}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{item.description}</p>
              <ul className="mb-5 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-[#f04e23] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-black text-lg">€{item.price.toFixed(2)}<span className="text-gray-500 font-normal text-xs">/rit</span></span>
                <button
                  onClick={() => toggleCart(item.id)}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all ${
                    inCart
                      ? 'bg-[#f04e23]/10 text-[#f04e23] border border-[#f04e23]/20 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20'
                      : 'bg-[#f04e23] text-white hover:bg-[#d43d14]'
                  }`}
                >
                  {inCart ? <><X className="w-3 h-3" />Verwijder</> : <><ShoppingCart className="w-3 h-3" />Toevoegen</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart summary */}
      {cart.length > 0 && (
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6">
          <h2 className="text-white font-black text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-[#f04e23]" />Geselecteerde add-ons
          </h2>
          <div className="space-y-2 mb-5">
            {cart.map(id => {
              const item = shopItems.find(i => i.id === id);
              if (!item) return null;
              return (
                <div key={id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">€{item.price.toFixed(2)}</span>
                    <button onClick={() => toggleCart(id)} aria-label="Verwijder" title="Verwijder" className="text-gray-600 hover:text-red-400 transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-white/5 pt-3 flex justify-between">
              <span className="text-white font-black text-sm uppercase tracking-wider">Totaal</span>
              <span className="text-white font-black">€{total.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs mb-4">Add-ons worden toegevoegd aan uw volgende boeking. U kunt ook contact opnemen om ze direct te activeren.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-[#f04e23] hover:bg-[#d43d14] text-white font-bold uppercase tracking-wider text-sm py-3 rounded-xl transition-colors"
            >
              Bestellen <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setCart([])}
              className="flex-1 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 font-bold uppercase tracking-wider text-sm py-3 rounded-xl transition-all"
            >
              Winkelmand legen
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
