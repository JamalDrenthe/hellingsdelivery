import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/over-ons', label: 'Over Ons' },
    { path: '/diensten', label: 'Diensten' },
    { path: '/wagenpark', label: 'Wagenpark' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#111]/90 backdrop-blur-lg py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group hover:scale-105 transition-transform duration-300 py-2">
            <img 
              src="/images/hellingsdeliverylogoletters.png" 
              alt="Hellings Delivery Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path) ? 'text-[#f04e23]' : 'text-white hover:text-[#f04e23]'} transition-colors uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 ${isActive(link.path) ? 'after:bg-[#f04e23]' : 'after:w-0 after:bg-[#f04e23] hover:after:w-full after:transition-all after:duration-300'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-[#f04e23] text-white px-8 py-3.5 rounded-full uppercase tracking-wider hover:bg-orange-600 hover:shadow-lg hover:shadow-[#f04e23]/30 transition-all duration-300 transform hover:-translate-y-0.5 ml-4"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            title="Menu openen"
          >
            <Menu className="w-7 h-7 md:w-8 md:h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] backdrop-blur-xl bg-white/95 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#f04e23] hover:rotate-90 transition-all duration-300 bg-gray-100 p-3 rounded-full" aria-label="Sluit menu" title="Menu sluiten">
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[65vh] space-y-8 text-xl font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${isActive(link.path) ? 'text-[#f04e23]' : 'text-gray-800 hover:text-[#f04e23]'} uppercase tracking-widest transform transition-transform hover:scale-110`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-8 w-full px-6 md:px-8">
          <Link 
            to="/contact" 
            className="block w-full bg-[#f04e23] text-white text-center py-5 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-orange-600 shadow-xl shadow-[#f04e23]/30 transition-all active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
