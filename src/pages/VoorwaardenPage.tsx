import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from '../lib/animations';
import SeoHead from '../components/SeoHead';

const sections = [
  {
    title: 'Artikel 1 – Definities',
    content: `In deze algemene voorwaarden wordt verstaan onder:
• Hellings Delivery: de opdrachtnemer, gevestigd in Nederland
• Opdrachtgever: de natuurlijke of rechtspersoon die een overeenkomst aangaat met Hellings Delivery
• Opdracht: de door opdrachtgever verstrekte opdracht tot het verzorgen van koeriersdiensten, vervoer of andere diensten
• Diensten: alle door Hellings Delivery aangeboden koeriersdiensten, luxe vervoer, abonnementen en aanverwante diensten`
  },
  {
    title: 'Artikel 2 – Toepasselijkheid',
    content: `2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van Hellings Delivery.

2.2 Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien uitdrukkelijk schriftelijk overeengekomen.

2.3 De toepasselijkheid van algemene voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.`
  },
  {
    title: 'Artikel 3 – Aanbod en totstandkoming overeenkomst',
    content: `3.1 Alle offertes en prijsopgaven zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.

3.2 Een overeenkomst komt tot stand op het moment dat Hellings Delivery een opdracht schriftelijk of per e-mail bevestigt, dan wel bij aanvang van de uitvoering van de opdracht.

3.3 Hellings Delivery behoudt zich het recht voor opdrachten te weigeren zonder opgave van redenen.`
  },
  {
    title: 'Artikel 4 – Vertrouwelijkheid en discretie',
    content: `4.1 Hellings Delivery behandelt alle opdrachten en informatie van opdrachtgevers strikt vertrouwelijk.

4.2 Medewerkers zijn gehouden aan een geheimhoudingsverklaring (NDA). Op verzoek wordt een schriftelijke NDA verstrekt.

4.3 Zonder uitdrukkelijke toestemming van de opdrachtgever worden geen gegevens gedeeld met derden, behoudens wettelijke verplichtingen.

4.4 Tracking en zichtbaarheid van ritten kan op verzoek van de opdrachtgever volledig worden uitgeschakeld.`
  },
  {
    title: 'Artikel 5 – Uitvoering van diensten',
    content: `5.1 Hellings Delivery spant zich in de opdrachten zo nauwkeurig en tijdig mogelijk uit te voeren.

5.2 Opgegeven tijden zijn indicatief, tenzij een uiterste leveringstijd uitdrukkelijk is overeengekomen.

5.3 Hellings Delivery is gerechtigd derden in te schakelen bij de uitvoering van opdrachten.

5.4 De opdrachtgever dient te zorgen voor correcte en volledige informatie die noodzakelijk is voor de uitvoering van de opdracht.`
  },
  {
    title: 'Artikel 6 – Prijzen en betaling',
    content: `6.1 Alle prijzen zijn in euro's en inclusief BTW, tenzij anders vermeld.

6.2 Betaling dient te geschieden binnen de op de factuur of in de overeenkomst vermelde termijn.

6.3 Bij niet-tijdige betaling is de opdrachtgever de wettelijke handelsrente verschuldigd, alsmede buitengerechtelijke incassokosten.

6.4 Hellings Delivery is gerechtigd prijzen te wijzigen. Bestaande abonnementen worden minimaal 30 dagen van tevoren geïnformeerd over prijswijzigingen.`
  },
  {
    title: 'Artikel 7 – Abonnementen',
    content: `7.1 Abonnementen worden aangegaan voor de overeengekomen periode (maand, kwartaal of jaar).

7.2 Abonnementen worden automatisch verlengd tenzij opzegging plaatsvindt conform artikel 7.3.

7.3 Opzegging dient schriftelijk te geschieden vóór het einde van de lopende periode. Bij maandabonnement: 14 dagen voor verlenging. Bij jaarbonnement: 30 dagen voor verlenging.

7.4 Restitutie van abonnementsgeld is niet mogelijk voor reeds verstreken perioden.`
  },
  {
    title: 'Artikel 8 – Aansprakelijkheid',
    content: `8.1 Hellings Delivery is aansprakelijk voor schade die het directe gevolg is van opzet of grove schuld.

8.2 De aansprakelijkheid is beperkt tot het bedrag van de factuurwaarde van de betreffende opdracht.

8.3 Voor zendingen is de aansprakelijkheid beperkt tot €2.500 per zending, tenzij uitdrukkelijk een hogere verzekering is overeengekomen.

8.4 Hellings Delivery is niet aansprakelijk voor gevolgschade, gederfde winst of indirecte schade.

8.5 Schade dient binnen 48 uur na constatering schriftelijk te worden gemeld.`
  },
  {
    title: 'Artikel 9 – Overmacht',
    content: `9.1 Hellings Delivery is niet gehouden tot nakoming van verplichtingen bij overmacht. Hieronder valt: extreme weersomstandigheden, file, wegafsluitingen, stakingen, pandemieën en overheidsmaatregelen.

9.2 Bij overmacht wordt de opdrachtgever zo spoedig mogelijk geïnformeerd.`
  },
  {
    title: 'Artikel 10 – Klachten',
    content: `10.1 Klachten dienen binnen 48 uur na uitvoering van de opdracht schriftelijk te worden ingediend via info@hellingsdelivery.nl.

10.2 Hellings Delivery streeft ernaar klachten binnen 5 werkdagen te beantwoorden.

10.3 Indien u niet tevreden bent met de afhandeling, kunt u het geschil voorleggen aan de bevoegde rechter te Amsterdam.`
  },
  {
    title: 'Artikel 11 – Toepasselijk recht',
    content: `11.1 Op alle overeenkomsten is Nederlands recht van toepassing.

11.2 Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam, tenzij partijen arbitrage of mediation overeenkomen.`
  }
];

export default function VoorwaardenPage() {
  return (
    <div>
      <SeoHead
        title="Algemene Voorwaarden – Hellings Delivery"
        description="Lees de algemene voorwaarden van Hellings Delivery voor koeriersdiensten, luxe vervoer en abonnementen."
        canonical="https://hellingsdelivery.nl/voorwaarden"
      />

      <section className="relative bg-[#0a0a0a] pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={staggerChild} className="flex items-center space-x-4 mb-6">
              <div className="w-8 md:w-12 h-[3px] bg-[#f04e23] rounded-full"></div>
              <span className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase">Juridisch</span>
            </motion.div>
            <motion.h1 variants={staggerChild} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tight uppercase">
              Algemene <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#F38A31]">Voorwaarden</span>
            </motion.h1>
            <motion.p variants={staggerChild} className="text-gray-400 text-sm md:text-base">
              Laatste update: januari 2026 · Hellings Delivery, Nederland
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
