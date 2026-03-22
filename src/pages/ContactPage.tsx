import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.naam || !formData.email || !formData.telefoon || !formData.bericht) {
      setError('Vul alstublieft alle verplichte velden in.');
      return;
    }

    setIsLoading(true);

    const { error: supabaseError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          naam: formData.naam,
          email: formData.email,
          telefoon: formData.telefoon,
          onderwerp: formData.onderwerp || null,
          bericht: formData.bericht,
        }
      ]);

    setIsLoading(false);

    if (supabaseError) {
      setError('Er is een fout opgetreden. Probeer het opnieuw of neem telefonisch contact op.');
      console.error('Supabase error:', supabaseError);
      return;
    }

    setIsSubmitted(true);
    setFormData({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefoon',
      content: '+31 (0)20 123 4567',
      subContent: '24/7 Spoedlijn',
      href: 'tel:+31201234567'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'info@hellingsdelivery.nl',
      subContent: 'Reactie binnen 2 uur',
      href: 'mailto:info@hellingsdelivery.nl'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Hoofdweg 123',
      subContent: '1012 AB Amsterdam',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Openingstijden',
      content: '24/7 Bereikbaar',
      subContent: 'Voor spoed altijd open',
      href: '#'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" alt="Contact Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Neem Contact<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Met Ons Op</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Ons team staat 24/7 voor u klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#f04e23] transition-colors duration-300">
                  <info.icon className="w-6 h-6 md:w-8 md:h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#111] uppercase mb-2 tracking-wider">{info.title}</h3>
                <p className="text-gray-800 font-medium text-sm md:text-base">{info.content}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">{info.subContent}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Form */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
                <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Stuur Ons Een Bericht</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] uppercase leading-[1.1] mb-8">
                Vraag Een <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Offerte</span> Aan
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-[2rem] p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 uppercase mb-4">Bedankt!</h3>
                  <p className="text-green-700 text-sm md:text-base">
                    Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start mb-6">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Naam *
                      </label>
                      <input 
                        type="text" 
                        value={formData.naam}
                        onChange={(e) => setFormData({...formData, naam: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        E-mailadres *
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800"
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Telefoonnummer *
                      </label>
                      <input 
                        type="tel" 
                        value={formData.telefoon}
                        onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Onderwerp
                      </label>
                      <select 
                        value={formData.onderwerp}
                        onChange={(e) => setFormData({...formData, onderwerp: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="offerte">Offerte aanvragen</option>
                        <option value="boeking">Rit boeken</option>
                        <option value="informatie">Algemene informatie</option>
                        <option value="spoed">Spoedopdracht</option>
                        <option value="zorgvervoer">Zorgvervoer</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Bericht *
                    </label>
                    <textarea 
                      value={formData.bericht}
                      onChange={(e) => setFormData({...formData, bericht: e.target.value})}
                      rows={6}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800 resize-none"
                      placeholder="Beschrijf uw wensen of vraag..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center text-white text-sm font-bold uppercase tracking-wider bg-[#111] hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed pr-2 pl-6 py-2 rounded-full transition-all duration-300 group"
                  >
                    {isLoading ? 'Verzenden...' : 'Verstuur Bericht'}
                    <span className="ml-4 bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                      {isLoading 
                        ? <Loader2 className="w-4 h-4 text-white animate-spin" />
                        : <Send className="w-4 h-4 text-white" />
                      }
                    </span>
                  </button>
                </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-bold text-[#111] uppercase mb-6 tracking-wider">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#f04e23]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Spoedlijn</p>
                      <a href="tel:+31201234567" className="text-gray-800 font-bold hover:text-[#f04e23] transition-colors">
                        +31 (0)20 123 4567
                      </a>
                      <p className="text-gray-500 text-xs mt-1">24/7 beschikbaar</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#f04e23]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">E-mail</p>
                      <a href="mailto:info@hellingsdelivery.nl" className="text-gray-800 font-bold hover:text-[#f04e23] transition-colors">
                        info@hellingsdelivery.nl
                      </a>
                      <p className="text-gray-500 text-xs mt-1">Reactie binnen 2 uur</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#f04e23]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Kantoor</p>
                      <p className="text-gray-800 font-bold">
                        Hoofdweg 123<br />
                        1012 AB Amsterdam
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Servicegebied</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nederland: Randstad, Noord-Brabant, Limburg<br />
                    België: Antwerpen, Brussel<br />
                    Internationaal op aanvraag
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Locatie</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] uppercase">
              Ons <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Kantoor</span>
            </h2>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#f04e23] mx-auto mb-4" />
                <p className="text-gray-600 font-bold uppercase tracking-wider">Hellings Delivery</p>
                <p className="text-gray-500 text-sm">Hoofdweg 123, 1012 AB Amsterdam</p>
                <p className="text-gray-400 text-xs mt-2">(Kaartweergave beschikbaar op aanvraag)</p>
              </div>
            </div>
          </div>
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
          
          <div className="w-full lg:w-2/3 py-20 lg:py-32 px-4 md:px-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-10 drop-shadow-2xl">
              Spoed?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Bel Direct</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 font-light">
              Voor spoedgevallen zijn wij 24/7 bereikbaar. Binnen 30 minuten een auto inzetbaar in de meeste grote steden.
            </p>
            <a 
              href="tel:+31201234567" 
              className="inline-flex items-center text-white text-sm md:text-base font-bold uppercase tracking-wider group bg-white/10 hover:bg-white/20 pr-2 pl-6 md:pl-8 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300"
            >
              Bel Nu: +31 (0)20 123 4567
              <span className="ml-4 md:ml-6 bg-[#f04e23] rounded-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f04e23]/50">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
