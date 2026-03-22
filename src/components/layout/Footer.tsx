import { Link } from 'react-router-dom';
import { ChevronRight, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 md:pt-24 md:pb-12 border-t-[6px] border-[#f04e23] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#f04e23]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-start mb-6 md:mb-8">
              <div className="flex flex-col items-center leading-none tracking-wider bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl">
                <span className="text-white font-black text-xl md:text-2xl uppercase tracking-widest drop-shadow-md">Hellings</span>
                <span className="text-[#f04e23] font-normal text-lg md:text-xl uppercase tracking-widest drop-shadow-md">Delivery</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-light">
              Professioneel, discreet en veilig koeriers- en personenvervoer. Uw vertrouwde logistieke partner voor exclusieve en zorgbehoevende ritten.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-6 md:mb-8 text-white">Navigatie</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link to="/over-ons" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Over Ons</Link></li>
              <li><Link to="/diensten" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Diensten</Link></li>
              <li><Link to="/wagenpark" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Wagenpark</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-6 md:mb-8 text-white">Diensten</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link to="/diensten" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Luxe & VIP Vervoer</Link></li>
              <li><Link to="/diensten" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Vertrouwelijk Vervoer</Link></li>
              <li><Link to="/diensten" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Zorg- & Begeleid Vervoer</Link></li>
              <li><Link to="/diensten" className="text-gray-400 hover:text-[#f04e23] hover:pl-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#f04e23]"/> Maatwerk voor Bedrijven</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
             <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-6 md:mb-8 text-white">Nieuwsbrief</h4>
             <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-full mb-8 md:mb-10 w-full max-w-md focus-within:border-[#f04e23] focus-within:ring-2 focus-within:ring-[#f04e23]/20 transition-all duration-300">
               <input 
                  type="email" 
                  placeholder="Uw e-mailadres..." 
                  className="w-full bg-transparent border-none text-white text-xs md:text-sm font-medium px-4 md:px-6 focus:outline-none placeholder-gray-500"
               />
               <button className="bg-gradient-to-r from-[#f04e23] to-[#F38A31] text-white p-2 md:p-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                 <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
               </button>
             </div>
             
             <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f04e23] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f04e23] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f04e23] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f04e23] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            © 2026 Hellings Delivery. Alle Rechten Voorbehouden.
          </p>
          <div className="flex space-x-4 md:space-x-6 text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
            <Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
