import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import SeoHead from '../components/SeoHead';

const sections = [
  {
    title: '1. Wie zijn wij?',
    content: `Hellings Delivery is een Nederlandse koeriersdienst gespecialiseerd in discreet, vertrouwelijk en luxe vervoer van personen, goederen en documenten. Wij zijn gevestigd in Nederland en opereren hoofdzakelijk in Nederland en België.

Contactgegevens:
• E-mail: privacy@hellingsdelivery.nl
• Website: www.hellingsdelivery.nl`
  },
  {
    title: '2. Welke gegevens verwerken wij?',
    content: `Wij verwerken de volgende persoonsgegevens:

• Naam en contactgegevens (e-mailadres, telefoonnummer)
• Factuuradres en bezorgadres
• Zakelijke gegevens (BTW-nummer, KVK-nummer)
• Bankgegevens (IBAN) voor terugbetalingen
• Bestelgeschiedenis en abonnementsgegevens
• Technische gegevens (IP-adres, browsertype, apparaattype via cookies)`
  },
  {
    title: '3. Waarvoor gebruiken wij uw gegevens?',
    content: `Uw persoonsgegevens worden uitsluitend gebruikt voor de volgende doeleinden:

• Het uitvoeren van opdrachten en bezorgingen
• Het beheren van uw account en profiel
• Facturatie en betalingsverwerking
• Het versturen van orderbevestigingen en updates
• Klantenservice en communicatie
• Het verbeteren van onze dienstverlening
• Naleving van wettelijke verplichtingen`
  },
  {
    title: '4. Grondslag voor verwerking',
    content: `Wij verwerken uw gegevens op basis van:

• Uitvoering van een overeenkomst: wanneer u een bestelling plaatst of een abonnement afsluit
• Wettelijke verplichting: voor belasting- en boekhoudkundige doeleinden
• Gerechtvaardigd belang: voor fraudepreventie en beveiliging
• Toestemming: voor marketingcommunicatie (u kunt dit te allen tijde intrekken)`
  },
  {
    title: '5. Hoe lang bewaren wij uw gegevens?',
    content: `Wij bewaren uw gegevens niet langer dan noodzakelijk:

• Accountgegevens: zolang uw account actief is
• Bestelgegevens: 7 jaar (wettelijke bewaarplicht)
• Marketinggegevens: tot u uw toestemming intrekt
• Technische logs: maximaal 12 maanden

Na afloop van de bewaartermijn worden uw gegevens veilig verwijderd of geanonimiseerd.`
  },
  {
    title: '6. Delen wij uw gegevens?',
    content: `Wij delen uw gegevens uitsluitend met:

• Betalingsproviders (Stripe) voor het verwerken van betalingen
• Supabase als technisch platform voor het opslaan van gegevens
• Vervoerspartners voor de uitvoering van opdrachten (minimaal noodzakelijke gegevens)
• Bevoegde autoriteiten indien wettelijk verplicht

Wij verkopen uw gegevens nooit aan derden voor commerciële doeleinden.`
  },
  {
    title: '7. Beveiliging',
    content: `Wij nemen de beveiliging van uw gegevens serieus:

• Alle gegevens worden versleuteld opgeslagen (AES-256)
• Verbindingen zijn beveiligd met TLS/HTTPS
• Toegang tot persoonsgegevens is beperkt tot bevoegd personeel
• Regelmatige beveiligingsaudits en updates
• Supabase Row Level Security (RLS) zorgt dat u alleen uw eigen gegevens kunt inzien`
  },
  {
    title: '8. Uw rechten',
    content: `U heeft de volgende rechten met betrekking tot uw persoonsgegevens:

• Inzage: u kunt een overzicht opvragen van uw gegevens
• Rectificatie: u kunt onjuiste gegevens laten corrigeren
• Verwijdering: u kunt verzoeken uw gegevens te verwijderen
• Beperking: u kunt verzoeken de verwerking te beperken
• Overdraagbaarheid: u kunt uw gegevens in een gestructureerd formaat ontvangen
• Bezwaar: u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang

Voor uitoefening van uw rechten kunt u contact opnemen via privacy@hellingsdelivery.nl. Wij reageren binnen 30 dagen.`
  },
  {
    title: '9. Cookies',
    content: `Wij gebruiken functionele cookies die noodzakelijk zijn voor het functioneren van de website. Deze cookies worden niet gebruikt voor tracking of marketingdoeleinden zonder uw toestemming. U kunt cookies uitschakelen via uw browserinstellingen, maar dit kan invloed hebben op de functionaliteit van de website.`
  },
  {
    title: '10. Wijzigingen',
    content: `Dit privacybeleid kan worden gewijzigd. Wij informeren u via e-mail of een melding op de website bij wezenlijke wijzigingen. De meest actuele versie is altijd beschikbaar op deze pagina.`
  },
  {
    title: '11. Klachten',
    content: `Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met ons op via privacy@hellingsdelivery.nl. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).`
  }
];

export default function PrivacyPage() {
  return (
    <div>
      <SeoHead
        title="Privacybeleid – Hellings Delivery"
        description="Lees hoe Hellings Delivery omgaat met uw persoonsgegevens. Transparant, veilig en in overeenstemming met de AVG."
        canonical="https://hellingsdelivery.nl/privacy"
      />

      <section className="relative bg-[#0a0a0a] pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={staggerChild} className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Juridisch</span>
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tight uppercase">
              Privacy<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">beleid</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-sm md:text-base">
              Laatste update: januari 2026 · Van toepassing op: hellingsdelivery.nl
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-10"
            >
              {sections.map((section, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <h2 className="text-xl font-black text-[#111] uppercase tracking-wider mb-4">{section.title}</h2>
                  <div className="text-gray-600 text-sm leading-relaxed font-light whitespace-pre-line">{section.content}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
