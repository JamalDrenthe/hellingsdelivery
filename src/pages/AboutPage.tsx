import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import { 
  Shield, Clock, Gem, Target, Eye, ChevronRight 
} from 'lucide-react';
import SeoHead from '../components/SeoHead';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://hellingsdelivery.nl' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Over Ons', 'item': 'https://hellingsdelivery.nl/over-ons' }
  ]
};

export default function AboutPage() {

  const coreValues = [
    {
      icon: Shield,
      title: 'Discretie',
      description: 'Chauffeurs handelen altijd met de grootste terughoudendheid. Uw privacy is onze hoogste prioriteit.'
    },
    {
      icon: Clock,
      title: 'Betrouwbaarheid',
      description: 'Op tijd, op de juiste plaats, met de juiste voorzorgsmaatregelen. Dat is onze belofte.'
    },
    {
      icon: Target,
      title: 'Flexibiliteit',
      description: 'Geen enkele opdracht is hetzelfde; wij denken in oplossingen en passen ons aan uw wensen aan.'
    },
    {
      icon: Gem,
      title: 'Luxe & Comfort',
      description: 'Voor wie meer wil dan standaard vervoer. Een premium ervaring van deur tot deur.'
    }
  ];

  const stats = [
    { value: '30 jaar', label: 'Ervaring' },
    { value: '5000+', label: 'Tevreden Klanten' },
    { value: '50+', label: 'Professionele Chauffeurs' },
    { value: '99%', label: 'Klanttevredenheid' }
  ];

  return (
    <div>
      <SeoHead
        title="Over Ons – Discreet & Betrouwbaar Vervoer | Hellings Delivery"
        description="Leer meer over Hellings Delivery: ons verhaal, kernwaarden en team. Gespecialiseerd in discretie, maatwerk en luxe vervoer in Nederland en België."
        canonical="https://hellingsdelivery.nl/over-ons"
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="Hellings Delivery team en bedrijfsprofiel" loading="lazy" className="w-full h-full object-cover opacity-20" />
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
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Over Ons</span>
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Ons Verhaal &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Missie</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Van een klein familiebedrijf tot een toonaangevende speler in exclusief vervoer. Ontdek wie wij zijn en wat ons drijft.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform skew-x-12 translate-x-32 hidden lg:block opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div
              className="w-full lg:w-1/2 relative px-2 sm:px-8 lg:px-0"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" 
                  alt="Hellings Delivery Team" 
                  className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 bg-gradient-to-br from-[#f04e23] to-[#d03d15] text-white p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl shadow-[#f04e23]/40 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 z-20">
                <span className="text-3xl md:text-4xl font-black">30 jaar</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Jaar Ervaring</span>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
                <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Ons Verhaal</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] uppercase leading-[1.1] mb-6 md:mb-8">
                Passie voor<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Perfectie</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Hellings Delivery is ontstaan uit een eenvoudige maar krachtige visie: vervoer moet meer zijn dan alleen van punt A naar punt B komen. Het moet een ervaring zijn van vertrouwen, comfort en absolute discretie.
                </p>
                <p>
                  Wat begon als een klein familiebedrijf met één luxe sedan, is uitgegroeid tot een toonaangevende speler in exclusief vervoer. Onze klanten variëren van particulieren met luxe wensen tot zorginstellingen en bedrijven die vertrouwelijke documenten of kostbare objecten moeten laten bezorgen.
                </p>
                <p>
                  Bij Hellings Delivery geloven we dat geen enkele opdracht hetzelfde is. Daarom denken wij in oplossingen, niet in standaardpakketten. Elke rit, elke zending, elke klant verdient maatwerk.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Mission */}
            <motion.div variants={fadeLeft} className="bg-gray-50 p-8 md:p-12 rounded-[2rem] md:rounded-[40px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f04e23]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#f04e23] to-[#F38A31] rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-[#f04e23]/30">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#111] uppercase mb-4 md:mb-6 tracking-wider">Onze Missie</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  Wij streven ernaar het meest betrouwbare en discrete vervoersbedrijf van Nederland en België te zijn. Door onze klanten een ongeëvenaarde service te bieden, waarbij veiligheid, comfort en privacy centraal staan, bouwen wij aan duurzame relaties gebaseerd op vertrouwen.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeRight} className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] md:rounded-[40px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f04e23]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/20">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#f04e23]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 md:mb-6 tracking-wider">Onze Visie</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  Wij zien een toekomst waarin exclusief vervoer toegankelijk is voor iedereen die waarde hecht aan kwaliteit en discretie. Door continu te innoveren en te investeren in ons team en wagenpark, blijven wij de standaard zetten in de branche. Waar anderen stoppen, gaan wij verder.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Waarden</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Kernwaarden</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {coreValues.map((value, index) => (
              <motion.div variants={staggerChild} key={index} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f04e23]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f04e23] transition-colors duration-300">
                    <value.icon className="w-7 h-7 md:w-8 md:h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#111] uppercase mb-3 tracking-wider group-hover:text-[#f04e23] transition-colors">{value.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#f04e23]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {stats.map((stat, index) => (
              <motion.div variants={scaleIn} key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 group-hover:text-[#f04e23] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-[#111] to-transparent z-10 hidden lg:block"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-[#111] to-transparent z-10 block lg:hidden"></div>
        
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-center lg:object-top" alt="Background" />
        </div>

        <div className="container mx-auto relative z-20 flex flex-col lg:flex-row items-center">
          
          <motion.div
            className="w-full lg:w-2/3 py-20 lg:py-32 px-4 md:px-8 text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-10 drop-shadow-2xl">
              Werken bij<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Hellings Delivery?</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 font-light">
              Wij zijn altijd op zoek naar gedreven chauffeurs die onze waarden delen. Solliciteer vandaag nog en word onderdeel van ons exclusieve team.
            </p>
            <Link to="/contact" className="inline-flex items-center text-white text-sm md:text-base font-bold uppercase tracking-wider group bg-white/10 hover:bg-white/20 pr-2 pl-6 md:pl-8 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300">
              Neem Contact Op 
              <span className="ml-4 md:ml-6 bg-[#f04e23] rounded-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f04e23]/50">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
