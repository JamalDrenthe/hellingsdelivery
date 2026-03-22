import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import { 
  Send, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SeoHead from '../components/SeoHead';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://hellingsdelivery.nl' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': 'https://hellingsdelivery.nl/contact' }
  ]
};

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
      setError('Er is een fout opgetreden. Probeer het formulier opnieuw te verzenden.');
      console.error('Supabase error:', supabaseError);
      return;
    }

    setIsSubmitted(true);
    setFormData({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
  };

  return (
    <div>
      <SeoHead
        title="Contact & Offerte Aanvragen | Hellings Delivery"
        description="Vraag een vrijblijvende offerte aan via het contactformulier van Hellings Delivery. Wij reageren zo snel mogelijk op uw aanvraag."
        canonical="https://hellingsdelivery.nl/contact"
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" alt="Contact Hellings Delivery voor luxe vervoer" loading="lazy" className="w-full h-full object-cover opacity-20" />
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
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Contact</span>
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Neem Contact<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Met Ons Op</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12">
            
            {/* Form */}
            <motion.div
              className="w-full max-w-3xl"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
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
                        title="Onderwerp selecteren"
                        aria-label="Onderwerp"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 md:py-4 px-4 md:px-6 focus:outline-none focus:bg-white focus:border-[#f04e23] focus:ring-4 focus:ring-[#f04e23]/10 transition-all duration-300 text-sm text-gray-800"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="offerte">Offerte aanvragen</option>
                        <option value="informatie">Algemene informatie</option>
                        <option value="spoed">Spoedopdracht</option>
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
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
