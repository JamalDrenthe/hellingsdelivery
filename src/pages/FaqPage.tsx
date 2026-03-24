import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, ChevronRight, Clock, Search
} from 'lucide-react';
import SeoHead from '../components/SeoHead';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs: FAQItem[] = [
    // Algemeen
    {
      question: 'Wat maakt Hellings Delivery anders dan andere koeriersdiensten?',
      answer: 'Hellings Delivery richt zich op maatwerk, discretie en kwaliteit. Wij vervoeren geen standaard pakketten, maar bieden een exclusieve service voor goederen en personen waarbij zorgvuldigheid, veiligheid en vertrouwen centraal staan. Onze chauffeurs worden speciaal getraind en ondergaan een antecedentenonderzoek.',
      category: 'algemeen'
    },
    {
      question: 'In welke regio\'s zijn jullie actief?',
      answer: 'Wij zijn actief in heel Nederland en België, met een speciale focus op de Randstad (Amsterdam, Rotterdam, Den Haag, Utrecht), Noord-Brabant, Limburg, Antwerpen en Brussel. Internationale ritten naar Duitsland, Frankrijk en het VK zijn mogelijk op aanvraag.',
      category: 'algemeen'
    },
    // Boeken & Reserveren
    {
      question: 'Hoe ver van tevoren moet ik boeken?',
      answer: 'Voor reguliere ritten adviseren wij minimaal 24 uur van tevoren te boeken. Voor spoeddiensten kunnen wij vaak binnen 30 minuten een auto inzetten, afhankelijk van de locatie en beschikbaarheid.',
      category: 'boeken'
    },
    {
      question: 'Kan ik een rit annuleren?',
      answer: 'Ja, annulering is mogelijk. Tot 24 uur voor de geplande rit is annulering kosteloos. Bij annulering binnen 24 uur kunnen wij kosten in rekening brengen. Neem zo snel mogelijk contact met ons op bij annulering.',
      category: 'boeken'
    },
    {
      question: 'Hoe weet ik of mijn boeking bevestigd is?',
      answer: 'Na uw boeking ontvangt u direct een bevestiging per e-mail met alle details van de rit. U ontvangt ook een herinnering 24 uur voor de geplande rit.',
      category: 'boeken'
    },
    // Vertrouwelijk Vervoer
    {
      question: 'Hoe werkt vertrouwelijk vervoer?',
      answer: 'Bij vertrouwelijk vervoer krijgt u een vaste chauffeur toegewezen die bekend is met uw wensen. Er worden geen onnodige details gedeeld met derden. Indien gewenst rijden wij zonder externe tracking en gebruiken wij neutrale verpakkingen. Alle chauffeurs tekenen een NDA (geheimhoudingsverklaring).',
      category: 'vertrouwelijk'
    },
    {
      question: 'Is tracking mogelijk voor mijn zending?',
      answer: 'Ja, wij bieden optionele tracking aan waarbij u een real-time trackinglink ontvangt. Voor ultieme discretie is tracking volledig uitschakelbaar op verzoek. U bepaalt zelf wat het beste past bij uw situatie.',
      category: 'vertrouwelijk'
    },
    {
      question: 'Wat is een NDA en waarom is dit belangrijk?',
      answer: 'NDA staat voor Non-Disclosure Agreement (geheimhoudingsverklaring). Dit is een juridisch document waarmee onze chauffeurs beloven geen informatie over uw zending of rit te delen met derden. Dit biedt extra zekerheid voor vertrouwelijke opdrachten.',
      category: 'vertrouwelijk'
    },
    // Zorgvervoer
    {
      question: 'Is zorgvervoer vergoed door de zorgverzekeraar?',
      answer: 'Wij werken met zowel particulieren als zorginstellingen. Bij medisch vervoer op verwijzing kunnen wij een factuur leveren die u kunt indienen bij uw verzekeraar. De vergoeding hangt af van uw verzekering en situatie. Vraag ons naar de mogelijkheden.',
      category: 'zorg'
    },
    // Spoedritten
    {
      question: 'Doen jullie ook spoedritten?',
      answer: 'Zeker. Neem contact met ons op via onze spoedlijn. Voor spoed kunnen wij snel een auto inzetten in de meeste grote steden. Spoedritten worden altijd prioriteit gegeven en direct opgepakt.',
      category: 'spoed'
    },
    {
      question: 'Wat kost een spoedrit?',
      answer: 'De kosten voor een spoedrit hangen af van de afstand, het type voertuig en het tijdstip. Neem contact met ons op voor een vrijblijvende offerte. Wij hanteren transparante prijzen zonder verborgen kosten.',
      category: 'spoed'
    },
    // Veiligheid & Verzekering
    {
      question: 'Zijn mijn zendingen verzekerd?',
      answer: 'Ja, alle zendingen en ritten zijn standaard gedekt tot €2,5 miljoen. Voor extra kostbare goederen is meeverzekering mogelijk. Vraag ons naar de mogelijkheden voor uw specifieke situatie.',
      category: 'veiligheid'
    },
    {
      question: 'Hoe worden chauffeurs geselecteerd?',
      answer: 'Alle chauffeurs ondergaan een streng selectieproces, inclusief antecedentenonderzoek, referentiechecks en specifieke training in omgang met gevoelige zendingen. Wij selecteren alleen de beste chauffeurs die onze waarden delen.',
      category: 'veiligheid'
    },
    {
      question: 'Wat gebeurt er bij schade of ongeluk?',
      answer: 'In het onwaarschijnlijke geval van schade of een ongeluk nemen wij direct contact met u op. Onze uitgebreide verzekering dekt de meeste situaties. Wij zorgen voor een snelle en correcte afhandeling van alle schade.',
      category: 'veiligheid'
    },
    // Betaling
    {
      question: 'Krijg ik een factuur?',
      answer: 'Ja, u ontvangt altijd een gedetailleerde factuur na afloop van de rit of zending. Voor zakelijke klanten kunnen wij maandelijkse rapportages en facturen verzorgen.',
      category: 'betaling'
    }
  ];

  const categories = [
    { id: 'all', label: 'Alle Vragen' },
    { id: 'algemeen', label: 'Algemeen' },
    { id: 'boeken', label: 'Boeken & Reserveren' },
    { id: 'vertrouwelijk', label: 'Vertrouwelijk Vervoer' },
    { id: 'zorg', label: 'Zorgvervoer' },
    { id: 'spoed', label: 'Spoedritten' },
    { id: 'veiligheid', label: 'Veiligheid & Verzekering' },
    { id: 'betaling', label: 'Betaling' }
  ];

  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }), [faqs]);

  const breadcrumbJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://hellingsdelivery.nl' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Veelgestelde Vragen', 'item': 'https://hellingsdelivery.nl/faq' }
    ]
  }), []);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SeoHead
        title="FAQ – Veelgestelde Vragen | Hellings Delivery"
        description="Antwoorden op veelgestelde vragen over VIP vervoer, zorgvervoer, boeken en veiligheid bij Hellings Delivery."
        canonical="https://hellingsdelivery.nl/faq"
        jsonLd={[faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8ed3c8d90c?q=80&w=2070&auto=format&fit=crop" alt="Veelgestelde vragen over Hellings Delivery vervoersdiensten" loading="lazy" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Veelgestelde<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Vragen</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Vind snel antwoord op uw vragen. Staat uw vraag er niet bij? Neem gerust contact met ons op.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zoek een vraag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f04e23] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#f04e23] text-white shadow-lg shadow-[#f04e23]/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-xl' : 'hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between"
                >
                  <h4 className={`text-base md:text-lg font-bold uppercase pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-[#f04e23]' : 'text-[#111]'
                  }`}>
                    {faq.question}
                  </h4>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#f04e23] text-white rotate-180' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="w-12 h-[2px] bg-gray-200 mb-4"></div>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Geen vragen gevonden in deze categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-[2rem] md:rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-6">
                  Nog Vragen?
                </h2>
                <p className="text-white/90 text-sm md:text-lg font-light mb-8">
                  Ons team staat voor u klaar om al uw vragen te beantwoorden. Neem gerust contact met ons op.
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

              <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 items-center gap-4 border border-white/20">
                <Clock className="w-8 h-8 text-white" />
                <div className="text-left">
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Bereikbaar</h4>
                  <p className="text-white/80 text-sm">Altijd snelle reactie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
