# Hellings Delivery

Hellings Delivery is een exclusieve koeriers- en vervoersdienst in Nederland en België. Wij bieden luxe VIP vervoer, vertrouwelijk transport, zorgvervoer en snelle koeriersdiensten met 100% discretie, 24/7 beschikbaar.

Deze repository bevat de broncode voor de officiële website van Hellings Delivery, gebouwd met een moderne React stack.

## 🚀 Technologieën

Het project maakt gebruik van de volgende moderne webtechnologieën:

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Taal**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icoontjes**: [Lucide React](https://lucide.dev/)
- **Animaties**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Database/Backend**: [Supabase](https://supabase.com/) (PostgreSQL & API)

## ✨ Belangrijkste Kenmerken

- **Responsief Design**: Volledig geoptimaliseerd voor mobiel, tablet en desktop.
- **Vloeiende Animaties**: Subtiele page transitions en scroll-animaties mogelijk gemaakt door Framer Motion.
- **Interactief Contactformulier**: Gekoppeld aan Supabase database (`contact_submissions` tabel) voor real-time opslag van klantaanvragen.
- **Geavanceerde SEO**: 
  - Dynamische per-pagina metadata via een custom `<SeoHead />` component.
  - Volledige JSON-LD (schema.org) structured data integratie (`LocalBusiness`, `FAQPage`, `BreadcrumbList`, etc.).
  - Open Graph tags en Twitter Cards geoptimaliseerd voor social media sharing.
  - Dynamische `sitemap.xml` en `robots.txt`.
- **Interactieve FAQ**: Een uitgebreide FAQ sectie met zoekfunctionaliteit en categorie filtering.
- **Typewriter Effect**: Dynamische tekst effecten op de homepage voor een moderne look & feel.
- **Performance Geoptimaliseerd**: Lazy loading voor afbeeldingen en efficiënte React component rendering.

## 📂 Project Structuur

De belangrijke mappen en bestanden in dit project:

```text
app/
├── public/                 # Statische assets (logo's, stock foto's, robots.txt, sitemap.xml)
│   └── images/
├── src/                    # Broncode
│   ├── components/         # Herbruikbare React componenten
│   │   ├── layout/         # Header, Footer
│   │   ├── SeoHead.tsx     # Dynamische SEO meta tags injector
│   │   └── ui/             # Knoppen, Cards, etc.
│   ├── lib/                # Externe library configuraties (Supabase client, framer-motion animaties)
│   ├── pages/              # Pagina componenten (Home, About, FAQ, Contact)
│   ├── App.tsx             # Hoofd applicatie component (Routing setup)
│   └── main.tsx            # React entry point
├── supabase/               # Supabase database migraties en schema's
├── index.html              # HTML entry point met globale SEO
├── tailwind.config.js      # Tailwind CSS configuratie
└── vite.config.ts          # Vite configuratie
```

## 🛠️ Installatie & Ontwikkeling

Volg deze stappen om het project lokaal te draaien:

### Vereisten
- [Node.js](https://nodejs.org/) (v18 of hoger aanbevolen)
- npm of yarn
- Een Supabase account (voor de database)

### Setup

1. **Clone de repository**
   ```bash
   git clone https://github.com/JamalDrenthe/hellingsdelivery.git
   cd hellingsdelivery/app
   ```

2. **Installeer afhankelijkheden**
   ```bash
   npm install
   ```

3. **Supabase Configuratie**
   Maak een `.env` bestand in de root van de `app/` folder met je Supabase inloggegevens:
   ```env
   VITE_SUPABASE_URL=jouw-supabase-url
   VITE_SUPABASE_ANON_KEY=jouw-supabase-anon-key
   ```
   Zorg ervoor dat in je Supabase project de tabel `contact_submissions` is aangemaakt op basis van de instructies in `/supabase/migrations`.

4. **Start de ontwikkelingsserver**
   ```bash
   npm run dev
   ```
   De applicatie is nu lokaal beschikbaar via `http://localhost:5173`.

### Bouwen voor Productie

Om een geoptimaliseerde productie build te maken:
```bash
npm run build
```
De gegenereerde bestanden komen in de `dist/` map terecht, klaar om gedeployed te worden.

## 📄 Licentie & Rechten
© 2026 Hellings Delivery. Alle rechten voorbehouden.
Code en design zijn eigendom van Hellings Delivery.
