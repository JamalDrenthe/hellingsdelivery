import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import { 
  ChevronRight, Package, ShieldCheck, Briefcase,
  UserCheck, ShieldAlert, Lock, CheckCircle, 
  Star, ArrowRight, Clock, MapPin
} from 'lucide-react';
import SeoHead from '../components/SeoHead';

// Typewriter Effect Component
const typewriterLines = ['Vervoer dat', 'past bij uw', 'wensen'];

function TypewriterText() {
  const lines = typewriterLines;
  const [displayedLines, setDisplayedLines] = useState(['', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(currentChar + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <>
      {displayedLines[0]}<br />
      {displayedLines[1]}<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">
        {displayedLines[2]}
      </span>
      <span className="animate-pulse">|</span>
    </>
  );
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    datum: '',
    omschrijving: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.naam || !formData.email || !formData.telefoon) {
      alert('Vul alstublieft alle verplichte velden in.');
      return;
    }
    alert('Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.');
    setFormData({ naam: '', email: '', telefoon: '', datum: '', omschrijving: '' });
  };

  return (
    <div>
      <SeoHead
        title="Hellings Delivery | Luxe & Veilig Vervoer in Nederland"
        description="Hellings Delivery: exclusieve koeriers- en vervoersdiensten. VIP vervoer, discreet transport en zorgvervoer in Nederland en België."
        canonical="https://hellingsdelivery.nl"
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8ed3c8d90c?q=80&w=2070&auto=format&fit=crop" alt="Hellings Delivery luxe vervoer achtergrond" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent lg:bg-none"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            
            <motion.div
              className="w-full lg:max-w-2xl mb-12 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerChild} className="flex items-center space-x-4 mb-6">
                <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
                <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Discreet & Betrouwbaar Vervoer</span>
              </motion.div>
              <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase drop-shadow-2xl min-h-[3em]">
                <TypewriterText />
              </motion.h1>
              
              <motion.p variants={staggerChild} className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mb-8 lg:mb-10 leading-relaxed font-light mx-auto lg:mx-0">
                Een exclusieve service voor goederen en personen waarbij zorgvuldigheid, veiligheid en absolute discretie centraal staan.
              </motion.p>
              
              <motion.div variants={staggerChild}>
                <Link to="/contact" className="inline-flex items-center text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider group bg-white/5 hover:bg-white/10 pr-2 pl-6 md:pl-8 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#f04e23]/20">
                  Plan een Rit 
                  <span className="ml-4 md:ml-6 bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="w-full lg:w-auto grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-10 text-center lg:text-right lg:pr-12 backdrop-blur-md bg-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10"
            >
              <div className="group cursor-default border-r border-white/10 lg:border-none px-2 lg:px-0">
                <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] sm:tracking-[0.2em] font-bold uppercase mb-1 md:mb-2 group-hover:text-[#f04e23] transition-colors">Verzekerd</div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white drop-shadow-lg">€2.5<span className="text-[#f04e23] text-lg sm:text-xl md:text-3xl align-top ml-1">M</span></div>
              </div>
              <div className="group cursor-default">
                <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] sm:tracking-[0.2em] font-bold uppercase mb-1 md:mb-2 group-hover:text-[#f04e23] transition-colors">Discretie</div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white drop-shadow-lg">100<span className="text-[#f04e23] ml-1">%</span></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
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
                  src="/images/stock photos/hd_stock_photo_01.png" 
                  alt="Hellings Delivery chauffeur bij luxe vervoersvoertuig" 
                  loading="lazy"
                  className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-4 md:bottom-12 md:-right-8 bg-gradient-to-br from-[#f04e23] to-[#d03d15] text-white p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl shadow-[#f04e23]/40 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 z-20 min-w-[140px]">
                <Lock className="w-8 h-8 md:w-12 md:h-12 mb-2" />
                <span className="text-sm md:text-base font-black uppercase tracking-widest text-center leading-tight">100%<br/>Maatwerk</span>
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
                <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Bedrijfsprofiel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase leading-[1.1] mb-6 md:mb-8">
                Uw zending,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">onze zorg</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base lg:text-lg font-light">
                Hellings Delivery is een gespecialiseerd koeriers- en vervoersbedrijf dat zich richt op maatwerk, discretie en kwaliteit. Wij vervoeren geen standaard pakketten, maar bieden een exclusieve service voor goederen.
              </p>
              <p className="text-gray-500 mb-8 md:mb-10 leading-relaxed font-light text-sm md:text-base">
                Onze klanten variëren van particulieren met luxe wensen tot zorginstellingen en bedrijven die vertrouwelijke documenten of kostbare objecten moeten laten bezorgen. Geen enkele opdracht is hetzelfde; wij denken in oplossingen.
              </p>
              
              <div className="flex justify-center lg:justify-start space-x-4">
                <div className="flex items-center text-sm font-bold uppercase text-gray-800 tracking-wider">
                  <CheckCircle className="w-5 h-5 text-[#f04e23] mr-2" /> Betrouwbaar
                </div>
                <div className="flex items-center text-sm font-bold uppercase text-gray-800 tracking-wider">
                  <CheckCircle className="w-5 h-5 text-[#f04e23] mr-2" /> Flexibel
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#f04e23]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full text-transparent"></div>
              <span className="text-[#f04e23] tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Onze Diensten</span>
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full text-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase">
              Discreet Transport &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Doordachte Logistiek</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Card 1 */}
            <motion.div variants={staggerChild} className="bg-[#151515] border border-white/5 rounded-3xl p-8 lg:p-10 text-center hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#f04e23]/10 hover:border-white/10 transition-all duration-500 group relative overflow-hidden">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-colors duration-500 transform group-hover:rotate-6">
                <Package className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#f04e23] transition-colors duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-3 md:mb-4 tracking-wider">Luxe Goederentransport</h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm leading-relaxed font-light">
                Discreet transport van kostbare kunst, antiek, sieraden en andere exclusieve objecten. White-glove behandeling met 100% discretie.
              </p>
              <Link to="/diensten" className="inline-flex items-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-[#f04e23] transition-colors group/btn">
                Meer Info <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={staggerChild} className="bg-gradient-to-b from-[#f04e23] to-[#c23610] rounded-3xl p-8 lg:p-10 text-center transform scale-100 lg:scale-105 shadow-2xl shadow-[#f04e23]/30 relative z-10 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/20">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-3 md:mb-4 tracking-wider">Vertrouwelijk Vervoer</h3>
              <p className="text-white/90 mb-6 md:mb-8 text-sm leading-relaxed font-medium">
                Koeriersdiensten voor juridische documenten en medische dossiers. Anonieme ritten en verzegelde verzendingen op verzoek.
              </p>
              <Link to="/contact" className="inline-flex items-center text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:text-orange-200 transition-colors bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20">
                Neem Contact Op
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={staggerChild} className="bg-[#151515] border border-white/5 rounded-3xl p-8 lg:p-10 text-center hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#f04e23]/10 hover:border-white/10 transition-all duration-500 group relative overflow-hidden md:col-span-1 lg:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-[#222] group-hover:bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-colors duration-500 transform group-hover:rotate-6">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#f04e23] transition-colors duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-3 md:mb-4 tracking-wider">Maatwerk voor Bedrijven</h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm leading-relaxed font-light">
                Vaste contracten, spoeddiensten en dagelijkse koeriersdiensten voor zakelijke klanten die vertrouwelijkheid eisen.
              </p>
              <Link to="/diensten" className="inline-flex items-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-[#f04e23] transition-colors group/btn">
                Meer Info <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience / Features Section */}
      <section className="py-16 lg:py-0 bg-white flex flex-col lg:flex-row border-t border-gray-100">
        
        <div className="container mx-auto px-4 md:px-8 lg:w-1/2 lg:py-32 flex justify-start lg:justify-end">
          <motion.div
            className="w-full max-w-lg lg:pr-16 text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerChild} className="flex items-center justify-start space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Werkwijze & Veiligheid</span>
            </motion.div>
            <motion.h2 variants={staggerChild} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase leading-[1.1] mb-10 md:mb-12">
              Strikte Protocollen
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              <motion.div variants={staggerChild} className="flex items-start">
                 <div className="bg-[#f04e23]/10 p-3 rounded-xl text-[#f04e23] mr-4 mt-1">
                    <UserCheck className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider text-gray-800 mb-1">Voorafgaande Screening</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Koeriers ondergaan een antecedentenonderzoek en worden specifiek getraind in omgang met gevoelige zendingen.</p>
                 </div>
              </motion.div>
              
              <motion.div variants={staggerChild} className="flex items-start">
                 <div className="bg-[#f04e23]/10 p-3 rounded-xl text-[#f04e23] mr-4 mt-1">
                    <Lock className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider text-gray-800 mb-1">Geheimhouding (NDA)</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Voor vertrouwelijke en waardevolle opdrachten wordt altijd standaard een geheimhoudingsverklaring getekend.</p>
                 </div>
              </motion.div>

              <motion.div variants={staggerChild} className="flex items-start">
                 <div className="bg-[#f04e23]/10 p-3 rounded-xl text-[#f04e23] mr-4 mt-1">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider text-gray-800 mb-1">Optionele Tracking</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Ontvang een real-time trackinglink. Voor ultieme discretie is tracking volledig uitschakelbaar op verzoek.</p>
                 </div>
              </motion.div>

              <motion.div variants={staggerChild} className="flex items-start">
                 <div className="bg-[#f04e23]/10 p-3 rounded-xl text-[#f04e23] mr-4 mt-1">
                    <ShieldAlert className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider text-gray-800 mb-1">Uitgebreid Verzekerd</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Zendingen en ritten zijn gedekt tot €2,5 miljoen. Voor extra kostbare goederen is meeverzekering mogelijk.</p>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-[2rem] lg:rounded-l-[80px] lg:rounded-r-none overflow-hidden shadow-2xl mx-4 lg:mx-0 lg:ml-8"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <img 
            src="/images/stock photos/hd_stock_photo_02.png" 
            alt="Beveiligd en vertrouwelijk transport door Hellings Delivery" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Waarom Kiezen Voor Ons</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Comfort en Stijl van <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Deur tot Deur</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            
            <div className="space-y-8 lg:space-y-12 order-2 lg:order-1 flex flex-col items-start">
              <div className="group hover:-translate-y-1 transition-transform w-full">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-[#f04e23] group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <UserCheck className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-base md:text-xl font-bold uppercase tracking-wider text-gray-800 group-hover:text-[#f04e23] transition-colors text-left">Vast Aanspreekpunt</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light text-left pl-[64px] md:pl-[80px]">
                  Voor vertrouwelijk vervoer krijgt u een vaste chauffeur toegewezen die bekend is met uw wensen.
                </p>
              </div>
              
              <div className="group hover:-translate-y-1 transition-transform w-full">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-[#f04e23] group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Clock className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-base md:text-xl font-bold uppercase tracking-wider text-gray-800 group-hover:text-[#f04e23] transition-colors text-left">Spoeddiensten</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light text-left pl-[64px] md:pl-[80px]">
                  Voor spoedgevallen staan wij altijd voor u klaar. Neem direct contact op voor een snelle inzet van een koerier.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end mb-4 lg:mb-0 px-8 sm:px-12 lg:px-0">
               <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#f04e23] to-[#F38A31] rounded-3xl transform rotate-6 scale-105 opacity-20 blur-lg"></div>
                 <img 
                    src="/images/stock photos/hd_stock_photo_03.png" 
                    alt="Luxe wagenpark van Hellings Delivery" 
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-white"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f04e23]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div
            className="text-center mb-16 md:mb-20 relative z-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Testimonials</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Tevreden</span> Klanten
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-0">
            
            <motion.div
              className="w-full lg:w-1/3 -mb-16 lg:mb-0 lg:-mr-12 relative z-20 flex justify-center"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
               <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="Tevreden klant van Hellings Delivery" 
                loading="lazy"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-[6px] md:border-[10px] lg:border-[12px] border-white shadow-xl"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-2/3 bg-white px-6 py-10 pt-24 sm:pt-32 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[40px] shadow-2xl shadow-gray-200/60 relative border border-gray-100"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >

              <div className="text-center max-w-2xl mx-auto px-4 sm:px-8">
                <div className="flex justify-center text-[#f04e23] space-x-1 md:space-x-2 mb-6">
                  <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                  <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                  <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                  <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                  <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                </div>
                <p className="text-gray-600 text-base md:text-xl lg:text-2xl font-light italic mb-8 md:mb-10 leading-relaxed">
                  "De aandacht voor detail en de discretie waarmee mijn vertrouwelijke documenten zijn behandeld was uitmuntend. Zeer professioneel en betrouwbaar!"
                </p>
                <div className="flex flex-col items-center">
                  <h5 className="text-[#111] text-base md:text-lg font-black uppercase tracking-wider">J. van der Meer</h5>
                  <span className="text-[#f04e23] text-xs md:text-sm uppercase tracking-[0.2em] mt-1 md:mt-2 font-bold">Amsterdam</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-[#111] to-transparent z-10 hidden lg:block"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-[#111] to-transparent z-10 block lg:hidden"></div>
        
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-center lg:object-top" alt="Hellings Delivery spoedvervoer en bereikbaarheid" loading="lazy" />
        </div>

        <div className="container mx-auto relative z-20 flex flex-col lg:flex-row items-center">
          
          <motion.div
            className="w-full lg:w-2/3 py-20 lg:py-32 px-4 md:px-8 text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-10 drop-shadow-2xl">
              Veilig &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Discreet</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 font-light">Actief in heel Nederland en België (Randstad, Brabant, Limburg, Antwerpen, Brussel). Internationaal op aanvraag.</p>
            <Link to="/contact" className="inline-flex items-center text-white text-sm md:text-base font-bold uppercase tracking-wider group bg-white/10 hover:bg-white/20 pr-2 pl-6 md:pl-8 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300">
              Neem Direct Contact Op 
              <span className="ml-4 md:ml-6 bg-[#f04e23] rounded-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f04e23]/50">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex lg:w-1/3 justify-end relative h-[600px]">
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col items-center mb-12 lg:mb-20 text-center">
             <div className="flex items-center space-x-4 mb-4 md:mb-6">
               <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
               <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">FAQ</span>
               <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
               Veelgestelde <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Vragen</span>
             </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] mb-3 group-hover:text-[#f04e23] transition-colors flex items-center">
                 <div className="w-8 h-8 rounded-full bg-[#f04e23]/10 text-[#f04e23] flex items-center justify-center mr-4 shrink-0">1</div>
                 Kan ik zelf een auto kiezen?
               </h4>
               <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed pl-12">
                 Ja, bij Hellings Delivery geeft u bij de boeking uw voorkeur aan. Wij adviseren u graag welke auto het beste past bij uw lading of gezelschap.
               </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] mb-3 group-hover:text-[#f04e23] transition-colors flex items-center">
                 <div className="w-8 h-8 rounded-full bg-[#f04e23]/10 text-[#f04e23] flex items-center justify-center mr-4 shrink-0">2</div>
                 Hoe werkt vertrouwelijk vervoer?
               </h4>
               <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed pl-12">
                 U krijgt een vaste chauffeur toegewezen die bekend is met uw wensen. Er worden geen onnodige details gedeeld met derden. Indien gewenst rijden wij zonder externe tracking en gebruiken wij neutrale verpakkingen.
               </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] mb-3 group-hover:text-[#f04e23] transition-colors flex items-center">
                 <div className="w-8 h-8 rounded-full bg-[#f04e23]/10 text-[#f04e23] flex items-center justify-center mr-4 shrink-0">3</div>
                 Doen jullie ook spoedritten?
               </h4>
               <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed pl-12">
                 Zeker. Neem contact op via onze spoedlijn. Voor spoed kunnen wij snel een auto inzetten in de meeste grote steden.
               </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] mb-3 group-hover:text-[#f04e23] transition-colors flex items-center">
                 <div className="w-8 h-8 rounded-full bg-[#f04e23]/10 text-[#f04e23] flex items-center justify-center mr-4 shrink-0">4</div>
                 Is zorgvervoer vergoed door de zorgverzekeraar?
               </h4>
               <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed pl-12">
                 Wij werken met zowel particulieren als zorginstellingen. Bij medisch vervoer op verwijzing kunnen wij een factuur leveren die u kunt indienen bij uw verzekeraar. Vraag naar de mogelijkheden.
               </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link to="/faq" className="inline-flex items-center text-[#f04e23] text-sm md:text-base font-bold uppercase tracking-wider hover:text-orange-600 transition-colors">
              Bekijk Alle Vragen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
         <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute top-10 -right-10 md:top-20 md:-right-20 w-48 h-48 md:w-80 md:h-80 bg-[#f04e23]/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center">
          
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-[#f04e23] tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Direct Reserveren</span>
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Vraag Een <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Offerte</span> Aan
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[40px] shadow-2xl shadow-gray-200 border border-gray-100 text-left relative overflow-hidden">
            <div className="absolute inset-0 border-[3px] border-white rounded-[2rem] md:rounded-[40px] pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 relative z-10">
              <div>
                <input 
                  type="text" 
                  placeholder="NAAM *" 
                  value={formData.naam}
                  onChange={(e) => setFormData({...formData, naam: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-xs md:text-sm font-bold tracking-wider uppercase text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="E-MAILADRES *" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-xs md:text-sm font-bold tracking-wider uppercase text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="TELEFOONNUMMER *" 
                  value={formData.telefoon}
                  onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-xs md:text-sm font-bold tracking-wider uppercase text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="DATUM" 
                  value={formData.datum}
                  onChange={(e) => setFormData({...formData, datum: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-xs md:text-sm font-bold tracking-wider uppercase text-gray-800 placeholder-gray-400" 
                />
              </div>
            </div>
            <div className="mb-8 md:mb-12 relative z-10">
              <input 
                type="text" 
                placeholder="OMSCHRIJVING VAN DE ZENDING / RIT" 
                value={formData.omschrijving}
                onChange={(e) => setFormData({...formData, omschrijving: e.target.value})}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-xs md:text-sm font-bold tracking-wider uppercase text-gray-800 placeholder-gray-400" 
              />
            </div>
            
            <div className="text-center relative z-10 flex justify-center">
               <button type="submit" className="inline-flex items-center text-white text-xs md:text-sm font-bold uppercase tracking-wider group hover:text-white transition-colors bg-[#111] hover:bg-gray-800 pl-6 md:pl-8 pr-2 py-2 rounded-full shadow-xl shadow-gray-200 w-full sm:w-auto justify-between sm:justify-start">
                  <span>Boekingsaanvraag</span>
                  <span className="ml-4 md:ml-6 bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </span>
                </button>
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}
