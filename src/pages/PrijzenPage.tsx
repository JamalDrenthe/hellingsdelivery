import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, Shield, Star, Zap, Phone } from 'lucide-react';
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import SeoHead from '../components/SeoHead';
import { useAuth } from '../contexts/AuthContext';

const plans = [
  {
    id: 'vaste-ophaalmomenten',
    name: 'Vaste Ophaalmomenten',
    badge: null,
    price: 149,
    interval: 'maand',
    description: 'Ideaal voor zakelijke klanten met vaste logistieke behoeften. Wij komen elke dag of week op vaste tijden ophalen.',
    icon: Clock,
    color: 'from-[#112A46] to-[#1a3a5c]',
    features: [
      'Tot 5 vaste ophaalmomenten per week',
      'Dedicated chauffeur op jouw route',
      'Prioriteit boven losse boekingen',
      'Maandelijkse rapportage',
      'Dedicated accountmanager',
      'Factuur achteraf mogelijk',
    ],
    cta: 'Plan activeren',
    highlight: false,
  },
  {
    id: 'membership',
    name: 'Membership',
    badge: 'Meest Gekozen',
    price: 299,
    interval: 'maand',
    description: 'Onbeperkte toegang tot ons netwerk van discrete koeriers en chauffeurs. De ultieme flexibiliteit voor veeleisende klanten.',
    icon: Star,
    color: 'from-[#f04e23] to-[#c23610]',
    features: [
      'Onbeperkte boekingen per maand',
      'Voorrang bij spoedritten (30 min response)',
      'Vaste ophaalmomenten inbegrepen',
      'Spoedritverzekering inbegrepen',
      'Premium tracking dashboard',
      'NDA-standaard op alle ritten',
      'Priority klantenservice 24/7',
      'Maandelijkse prestatierapportage',
    ],
    cta: 'Membership starten',
    highlight: true,
  },
  {
    id: 'spoedritverzekering',
    name: 'Spoedritverzekering',
    badge: null,
    price: 79,
    interval: 'maand',
    description: 'Zekerheid dat er altijd binnen 30 minuten een koeriersdienst beschikbaar is, dag en nacht, 7 dagen per week.',
    icon: Zap,
    color: 'from-[#f04e23] to-[#F38A31]',
    features: [
      'Garantie: binnen 30 minuten beschikbaar',
      'Geldig 24/7, ook op feestdagen',
      'Spoedrit max 3× per maand inbegrepen',
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
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    €{plan.price}<span className={`text-base font-normal ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>/{plan.interval}</span>
                  </div>
                  <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/60' : 'text-gray-600'}`}>excl. BTW · maandelijks opzegbaar</p>

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
