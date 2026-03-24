import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Star, Zap, Phone, Clock, FileText } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import SeoHead from '../components/SeoHead';
import { useAuth } from '../contexts/AuthContext';

const plans = [
  {
    id: 'membership',
    name: 'Membership',
    badge: 'Meest Gekozen',
    price: 299,
    interval: 'maand',
    description: 'Directe toegang tot ons netwerk van discrete koeriers en chauffeurs. De ultieme flexibiliteit voor veeleisende klanten.',
    icon: Star,
    color: 'from-[#f04e23] to-[#c23610]',
    features: [
      'Gegarandeerde beschikbaarheid per boeking',
      'Voorrang bij spoedritten',
      'Vaste ophaalmomenten in te plannen',
      'Spoedritverzekering optioneel',
      'Premium tracking dashboard',
      'NDA-standaard op alle ritten',
      'Priority klantenservice',
      'Maandelijkse prestatierapportage',
    ],
    cta: 'Membership starten',
    highlight: true,
  },
  {
    id: 'spoedritverzekering',
    name: 'Spoedritverzekering',
    badge: null,
    price: 375,
    interval: 'maand',
    description: 'Zekerheid dat er altijd snel een koeriersdienst beschikbaar is, op alle dagen van de week.',
    icon: Zap,
    color: 'from-[#f04e23] to-[#F38A31]',
    features: [
      'Garantie: snelle beschikbaarheid',
      'Geldig op alle dagen, ook op feestdagen',
      '1 spoedrit per maand inbegrepen',
      'Directe telefonische beschikbaarheid',
      'Volledig verzekerd transport',
      'Nationaal dekkingsgebied',
    ],
    cta: 'Verzekering activeren',
    highlight: false,
  },
];

const faqs = [
  { q: 'Kan ik een abonnement combineren?', a: 'Ja, u kunt meerdere abonnementen combineren. Het Membership-plan omvat al de voordelen van Vaste Ophaalmomenten en Spoedritverzekering.' },
  { q: 'Hoe lang is de minimale looptijd?', a: 'Alle abonnementen zijn maandelijks opzegbaar. U betaalt alleen voor de huidige periode.' },
  { q: 'Kan ik een proefperiode krijgen?', a: 'Neem contact met ons op voor een maatwerkofferte of proefperiode voor zakelijke klanten.' },
  { q: 'Hoe werkt facturatie?', a: 'U ontvangt maandelijks een factuur. Zakelijke klanten met een actief KVK-nummer kunnen op factuur betalen.' },
];

export default function PrijzenPage() {
  const { user } = useAuth();
  const [billing, setBilling] = useState<'month' | 'year'>('month');
  const yearlyMultiplier = 0.8;

  return (
    <div>
      <SeoHead
        title="Abonnementen & Prijzen – Hellings Delivery"
        description="Kies het abonnement dat bij uw logistieke behoeften past. Vaste ophaalmomenten, membership of spoedritverzekering. Transparante prijzen, maximale discretie."
        canonical="https://hellingsdelivery.nl/prijzen"
      />

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f04e23]/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerChild} className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-[3px] bg-[#f04e23] rounded-full" />
              <span className="text-white tracking-[0.2em] text-xs font-bold uppercase">Abonnementen</span>
              <div className="w-8 h-[3px] bg-[#f04e23] rounded-full" />
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Kies uw <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Plan</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-light">
              Transparante prijzen zonder verborgen kosten. Maandelijks opzegbaar.
            </motion.p>

            {/* Billing toggle */}
            <motion.div variants={staggerChild} className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-bold uppercase tracking-wider ${billing === 'month' ? 'text-white' : 'text-gray-500'}`}>Maandelijks</span>
              <button
                onClick={() => setBilling(b => b === 'month' ? 'year' : 'month')}
                aria-label="Schakel facturatieperiode"
                title="Schakel facturatieperiode"
                className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none"
                style={{ background: billing === 'year' ? '#f04e23' : '#333' }}
              >
                <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${billing === 'year' ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-bold uppercase tracking-wider ${billing === 'year' ? 'text-white' : 'text-gray-500'}`}>
                Jaarlijks
                <span className="ml-2 text-xs bg-[#f04e23]/20 text-[#f04e23] px-2 py-0.5 rounded-full">-20%</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-3xl p-8 ${plan.highlight ? 'bg-gradient-to-b from-[#f04e23] to-[#c23610] shadow-2xl shadow-[#f04e23]/30 scale-[1.02]' : 'bg-[#151515] border border-white/5'}`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#f04e23] text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-white/20' : 'bg-[#f04e23]/10'}`}>
                    <Icon className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-[#f04e23]'}`} />
                  </div>
                  <h2 className={`text-lg font-black uppercase tracking-wider mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.name}</h2>
                  <p className={`text-sm leading-relaxed mb-6 flex-shrink-0 ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>{plan.description}</p>

                  <div className={`text-4xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                    €{billing === 'year' ? Math.round(plan.price * yearlyMultiplier) : plan.price}
                    <span className={`text-base font-normal ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>/{billing === 'year' ? 'maand' : plan.interval}</span>
                  </div>
                  {billing === 'year' && (
                    <p className={`text-xs mb-1 line-through ${plan.highlight ? 'text-white/40' : 'text-gray-600'}`}>€{plan.price}/maand</p>
                  )}
                  <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/60' : 'text-gray-600'}`}>
                    {billing === 'year' ? `€${Math.round(plan.price * yearlyMultiplier * 12)}/jaar · 20% bespaard` : 'excl. BTW · maandelijks opzegbaar'}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-300'}`}>
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-[#f04e23]'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {user ? (
                    <Link
                      to="/account/subscriptions"
                      className={`flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm py-3 rounded-xl transition-colors ${plan.highlight ? 'bg-white text-[#f04e23] hover:bg-gray-100' : 'bg-[#f04e23] text-white hover:bg-[#d43d14]'}`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      to="/register"
                      className={`flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm py-3 rounded-xl transition-colors ${plan.highlight ? 'bg-white text-[#f04e23] hover:bg-gray-100' : 'bg-[#f04e23] text-white hover:bg-[#d43d14]'}`}
                    >
                      Account aanmaken <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vaste ophaalmomenten op aanvraag */}
      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto bg-[#151515] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-16 h-16 bg-[#f04e23]/10 rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="w-8 h-8 text-[#f04e23]" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">Vaste Ophaal- &amp; Levermomenten</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Wilt u vaste ophaal- en levermomenten op maat? Dit is een maatwerkarrangement. Maak een account aan, vul uw gegevens in en wij nemen contact op om uw vaste schema in te plannen.
              </p>
              <ul className="space-y-1 mb-6">
                {['Tot 5 vaste ophaalmomenten per week', 'Dedicated chauffeur op uw route', 'Prioriteit boven losse boekingen', 'Factuur achteraf mogelijk'].map((f, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-[#f04e23] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="flex items-center gap-2 bg-[#f04e23] hover:bg-[#d43d14] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4" /> Account aanmaken
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" /> Contact opnemen
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl mx-auto bg-[#151515] border border-white/5 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-14 h-14 bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-[#f04e23]" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Enterprise & Maatwerk</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Heeft u specifieke eisen of een groot volume? Wij bieden maatwerkcontracten voor grotere organisaties met speciale condities, SLA-garanties en dedicated support.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#f04e23] hover:bg-[#d43d14] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" /> Neem contact op
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 variants={staggerChild} className="text-2xl font-black text-[#111] uppercase tracking-tight text-center mb-10">
              Veelgestelde Vragen
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={staggerChild} className="border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-sm font-black text-[#111] uppercase tracking-wider mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
