import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle, Users, Briefcase, Wind, Droplets, 
  Shield, Eye, Accessibility
} from 'lucide-react';

export default function FleetPage() {
  const vehicles = [
    {
      type: 'Luxe Sedan',
      models: 'Mercedes E-klasse, BMW 5-serie, Audi A6',
      description: 'Onze luxe sedans bieden de perfecte combinatie van stijl, comfort en discretie. Ideaal voor VIP-vervoer, zakelijke ritten en het transport van kleine waardevolle objecten.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
      features: [
        'Zwart lederen interieur',
        'Getinte ramen voor privacy',
        'Stille motor',
        'Climate control (airco)',
        'Water en krant aan boord',
        'Geschikt voor 3 passagiers'
      ],
      specs: {
        passengers: '3',
        luggage: '2 koffers',
        category: 'Luxe'
      },
      icon: Users,
      color: 'from-[#f04e23] to-[#F38A31]'
    },
    {
      type: 'Premium SUV',
      models: 'Mercedes GLE, BMW X5, Volvo XC90',
      description: 'Meer ruimte, meer comfort. Onze premium SUV\'s zijn perfect voor langere ritten, slecht weer en situaties waarin extra ruimte gewenst is. Optioneel rolstoeltoegankelijk.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
      features: [
        'Ruime interieur',
        '4x4 aandrijving',
        'Climate control',
        'Getinte ramen',
        'Optioneel rolstoeltoegankelijk',
        'Geschikt voor 4 passagiers'
      ],
      specs: {
        passengers: '4-5',
        luggage: '4 koffers',
        category: 'Premium'
      },
      icon: Shield,
      color: 'from-[#112A46] to-[#1a3a5c]'
    },
    {
      type: 'Discreet Busje',
      models: 'Mercedes Vito, Volkswagen Transporter',
      description: 'Volledig zwarte, onopvallende busjes voor grotere objecten of extra anonimiteit. Perfect voor vertrouwelijke zendingen en situaties waarin discretie essentieel is.',
      image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2070&auto=format&fit=crop',
      features: [
        'Volledig zwart exterieur',
        'Onopvallend design',
        'Grote laadruimte',
        'Climate control',
        'Geschikt voor grote objecten',
        'Extra anonimiteit'
      ],
      specs: {
        passengers: '2-3',
        luggage: 'Grote lading',
        category: 'Discreet'
      },
      icon: Eye,
      color: 'from-gray-700 to-gray-900'
    },
    {
      type: 'Zorgvoertuig',
      models: 'Opel Vivaro met rolstoellift',
      description: 'Speciaal uitgerust voertuig voor zorgvervoer. Met rolstoellift, getrainde chauffeur en alle faciliteiten voor een comfortabele en veilige rit voor zorgbehoevenden.',
      image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?q=80&w=2070&auto=format&fit=crop',
      features: [
        'Rolstoellift',
        'Getrainde chauffeur',
        'Toegankelijk ontwerp',
        'Veilige bevestiging',
        'Klimaatcontrole',
        'Comfortabele zitplaatsen'
      ],
      specs: {
        passengers: '1 rolstoel + 2',
        luggage: 'Beperkt',
        category: 'Zorg'
      },
      icon: Accessibility,
      color: 'from-[#f04e23] to-[#F38A31]'
    },
    {
      type: 'Koeriersauto',
      models: 'Kleine, wendbare bestelwagen',
      description: 'Compacte en wendbare bestelwagens voor snelle documenten- en pakketbezorging in de stad. Efficiënt, snel en betrouwbaar voor al uw spoedzendingen.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop',
      features: [
        'Wendbaar in de stad',
        'Snelle bezorging',
        'Compact formaat',
        'Efficiënt brandstofverbruik',
        'Geschikt voor pakketten',
        'Ideaal voor spoed'
      ],
      specs: {
        passengers: '1-2',
        luggage: 'Pakketten',
        category: 'Koerier'
      },
      icon: Briefcase,
      color: 'from-[#112A46] to-[#1a3a5c]'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] min-h-[60vh] flex items-center pt-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="Fleet Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Ons Wagenpark</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
              Exclusief<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Wagenpark</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Van luxe sedans tot discreet busjes. Ontdek ons veelzijdige wagenpark, speciaal samengesteld voor al uw vervoersbehoeften.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-20 lg:space-y-32">
            {vehicles.map((vehicle, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.type} 
                      className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute top-6 left-6 bg-gradient-to-r ${vehicle.color} text-white px-4 py-2 rounded-full shadow-lg z-20`}>
                      <span className="text-xs font-bold uppercase tracking-wider">{vehicle.specs.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
                    <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">{vehicle.models}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] uppercase leading-[1.1] mb-4 md:mb-6">
                    {vehicle.type}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8">
                    {vehicle.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
                      <Users className="w-4 h-4 text-[#f04e23] mr-2" />
                      <span className="text-sm font-bold text-gray-700">{vehicle.specs.passengers} passagiers</span>
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
                      <Briefcase className="w-4 h-4 text-[#f04e23] mr-2" />
                      <span className="text-sm font-bold text-gray-700">{vehicle.specs.luggage}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {vehicle.features.map((feature, fIndex) => (
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
                    Reserveer Dit Voertuig
                    <span className="ml-4 bg-gradient-to-r from-[#f04e23] to-[#F38A31] rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
              <span className="text-gray-500 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Standaard Voorzieningen</span>
              <div className="w-8 md:w-12 h-[3px] bg-gray-300 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111] uppercase">
              Altijd <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Inbegrepen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-16 h-16 mx-auto bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f04e23] transition-colors duration-300">
                <Wind className="w-8 h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#111] uppercase mb-2 tracking-wider">Climate Control</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Altijd de perfecte temperatuur, zomer en winter.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-16 h-16 mx-auto bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f04e23] transition-colors duration-300">
                <Eye className="w-8 h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#111] uppercase mb-2 tracking-wider">Getinte Ramen</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Maximale privacy tijdens elke rit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-16 h-16 mx-auto bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f04e23] transition-colors duration-300">
                <Droplets className="w-8 h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#111] uppercase mb-2 tracking-wider">Water aan Boord</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Verfrissing beschikbaar tijdens de rit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-16 h-16 mx-auto bg-[#f04e23]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f04e23] transition-colors duration-300">
                <Shield className="w-8 h-8 text-[#f04e23] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#111] uppercase mb-2 tracking-wider">Verzekerd</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Tot €2,5 miljoen gedekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#f04e23]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-[#f04e23] tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Vergelijking</span>
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase">
              Kies Het Juiste <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Voertuig</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white font-bold uppercase tracking-wider">Voertuig</th>
                  <th className="text-center py-4 px-4 text-white font-bold uppercase tracking-wider">Passagiers</th>
                  <th className="text-center py-4 px-4 text-white font-bold uppercase tracking-wider">Bagage</th>
                  <th className="text-center py-4 px-4 text-white font-bold uppercase tracking-wider">Beste Voor</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#f04e23]/10 rounded-xl flex items-center justify-center mr-4">
                          <vehicle.icon className="w-5 h-5 text-[#f04e23]" />
                        </div>
                        <div>
                          <div className="text-white font-bold uppercase">{vehicle.type}</div>
                          <div className="text-gray-500 text-xs">{vehicle.models}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400">{vehicle.specs.passengers}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{vehicle.specs.luggage}</td>
                    <td className="text-center py-4 px-4">
                      <span className="bg-[#f04e23]/10 text-[#f04e23] px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {vehicle.specs.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                Niet Zeker Welke Auto?
              </h2>
              <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto mb-8 font-light">
                Neem contact met ons op voor persoonlijk advies. Wij helpen u graag bij het kiezen van het perfecte voertuig voor uw situatie.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-[#f04e23] text-sm font-bold uppercase tracking-wider bg-white pr-2 pl-6 py-2 rounded-full transition-all duration-300 group hover:shadow-xl"
              >
                Vraag Advies Aan
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
