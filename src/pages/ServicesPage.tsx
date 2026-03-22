import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import { 
  Package, ShieldCheck, Briefcase,
  ChevronRight, CheckCircle, Clock, Shield, UserCheck,
  MapPin, Gem
} from 'lucide-react';
import SeoHead from '../components/SeoHead';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://hellingsdelivery.nl' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Diensten', 'item': 'https://hellingsdelivery.nl/diensten' }
  ]
};

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: 'Luxe Goederentransport',
      shortDesc: 'Discreet transport van waardevolle en exclusieve goederen',
      fullDesc: 'Voor de bezorging van kostbare kunst, antiek, designmeubels, sieraden, horloges of andere exclusieve objecten bieden wij een white-glove service. Wij behandelen elke zending alsof het ons eigendom is.',
      features: [
        'White-glove behandeling door getrainde professionals',
        'Climate-controlled transport voor gevoelige items',
        'Volledig verzekerd tot €2,5 miljoen',
        'Discreet en anoniem op verzoek',
        'Directe bezorging zonder tussenstops',
        'Veilige verpakking en handling'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2070&auto=format&fit=crop',
      color: 'from-[#f04e23] to-[#F38A31]'
    },
    {
      icon: ShieldCheck,
      title: 'Vertrouwelijk Vervoer',
      shortDesc: 'Veilige bezorging van gevoelige documenten en objecten',
      fullDesc: 'Voor juridische documenten, medische dossiers en bedrijfsgevoelige informatie bieden wij een vertrouwelijke koeriersdienst. Anonieme bezorging, verzegelde verzendingen en strikte NDA-verplichtingen garanderen uw privacy.',
      features: [
        'NDA (geheimhoudingsverklaring) standaard',
        'Anonieme bezorging zonder externe herkenning',
        'Verzegelde verzendingen op verzoek',
        'Directe levering zonder tussenstops',
        'Gecertificeerde koeriers met screening',
        'Tracking optioneel en uitschakelbaar'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      color: 'from-[#112A46] to-[#1a3a5c]'
    },
    {
      icon: Briefcase,
      title: 'Maatwerk voor Bedrijven',
      shortDesc: 'Logistieke oplossingen voor zakelijke klanten',
      fullDesc: 'Voor bedrijven bieden wij flexibele logistieke oplossingen. Van spoedbezorgingen tot vaste contracten en dagelijkse koeriersdiensten – wij passen ons aan uw bedrijfsbehoeften aan.',
      features: [
        'Vaste contracten met voorkeursbehandeling',
        'Spoeddiensten 24/7 beschikbaar',
        'Dagelijkse koeriersdiensten',
        'Maandelijkse rapportage en facturering',
        'Dedicated accountmanager',
        'Strikte vertrouwelijkheid gegarandeerd'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      color: 'from-[#112A46] to-[#1a3a5c]'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Aanvraag',
      description: 'Neem contact met ons op via het contactformulier. Beschrijf uw wensen en eisen.'
    },
    {
      step: '02',
      title: 'Advies',
      description: 'Wij adviseren u over de beste oplossing en maken een vrijblijvende offerte op maat.'
    },
    {
      step: '03',
      title: 'Uitvoering',
      description: 'Na goedkeuring plannen wij de rit in en voeren deze uit met de grootste zorg en precisie.'
    },
    {
      step: '04',
      title: 'Evaluatie',
      description: 'Na afloop evalueren wij de service en staan wij klaar voor toekomstige opdrachten.'
    }
  ];

  return (
    <div>
      <SeoHead
        title="Onze Diensten – Discreet & Vertrouwelijk Transport | Hellings Delivery"
        description="Hellings Delivery biedt discreet goederentransport, vertrouwelijke koeriersdiensten en maatwerk voor bedrijven. 100% discretie, 24/7 beschikbaar."
        canonical="https://hellingsdelivery.nl/diensten"
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8ed3c8d90c?q=80&w=2070&auto=format&fit=crop" alt="Hellings Delivery vervoersdiensten overzicht" loading="lazy" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <motion.div
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerChild} className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Onze Diensten</span>
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Maatwerk in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Vervoer</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Van luxe VIP-vervoer tot discrete koeriersdiensten. Ontdek ons uitgebreide aanbod aan exclusieve vervoersoplossingen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {/* Image */}
                <motion.div variants={index % 2 === 1 ? fadeRight : fadeLeft} className="w-full lg:w-1/2">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute bottom-6 left-6 bg-gradient-to-r ${service.color} text-white p-4 rounded-2xl shadow-lg z-20`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={index % 2 === 1 ? fadeLeft : fadeRight} className="w-full lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
                    <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Dienst {index + 1}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] uppercase leading-[1.1] mb-4 md:mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[#f04e23] text-sm md:text-base font-bold uppercase tracking-wider mb-4">
                    {service.shortDesc}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#f04e23] mr-2 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-white text-sm font-bold uppercase tracking-wider bg-[#111] hover:bg-gray-800 pr-2 pl-6 py-2 rounded-full transition-all duration-300 group"
                  >
                    Vraag Offerte Aan
                    <span className="ml-4 bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                  </Link>
                </motion.div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div
            className="text-center mb-16 lg:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Hoe Het Werkt</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Ons <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Proces</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {process.map((step, index) => (
              <motion.div variants={staggerChild} key={index} className="relative">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                  <div className="text-5xl md:text-6xl font-black text-gray-100 group-hover:text-[#f04e23]/20 transition-colors duration-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#111] uppercase mb-3 tracking-wider group-hover:text-[#f04e23] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#f04e23]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-[#f04e23] tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Waarom Wij</span>
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Sterktes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#151515] border border-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Clock className="w-8 h-8 text-white group-hover:text-[#f04e23] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3 tracking-wider">24/7 Beschikbaar</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Altijd bereikbaar, dag en nacht. Voor spoed kunnen wij binnen 30 minuten een auto inzetten.
              </p>
            </div>

            <div className="bg-[#151515] border border-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="w-8 h-8 text-white group-hover:text-[#f04e23] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3 tracking-wider">Volledig Verzekerd</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Zendingen en ritten zijn gedekt tot €2,5 miljoen. Meeverzekering mogelijk voor extra waarde.
              </p>
            </div>

            <div className="bg-[#151515] border border-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <UserCheck className="w-8 h-8 text-white group-hover:text-[#f04e23] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3 tracking-wider">Gescreende Chauffeurs</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Alle chauffeurs ondergaan een antecedentenonderzoek en specifieke training.
              </p>
            </div>

            <div className="bg-[#151515] border border-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-white group-hover:text-[#f04e23] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3 tracking-wider">Nederland & België</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Actief in de Randstad, Brabant, Limburg, Antwerpen en Brussel. Internationaal op aanvraag.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#f04e23] to-[#c23610] rounded-3xl p-8 text-center transform scale-100 shadow-2xl shadow-[#f04e23]/30 sm:col-span-2 lg:col-span-2">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3 tracking-wider">Exclusief Wagenpark</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium max-w-md mx-auto">
                Van luxe sedans tot premium SUV's en discreet busjes. Alle voertuigen zijn uitgerust met climate control, getinte ramen en comfortabele zitplaatsen.
              </p>
              <Link 
                to="/wagenpark" 
                className="inline-flex items-center text-white text-sm font-bold uppercase tracking-wider mt-6 bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Bekijk Wagenpark <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-[2rem] md:rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6">
                Klaar om te Starten?
              </h2>
              <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto mb-8 font-light">
                Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Wij denken graag met u mee over de beste oplossing.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-[#f04e23] text-sm font-bold uppercase tracking-wider bg-white pr-2 pl-6 py-2 rounded-full transition-all duration-300 group hover:shadow-xl"
              >
                Neem Contact Op
                <span className="ml-4 bg-[#f04e23] rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                  <ChevronRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
