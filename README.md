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
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

## ✨ Belangrijkste Kenmerken

- **Responsief Design**: Volledig geoptimaliseerd voor mobiel, tablet en desktop.
- **Beveiligd Wagenpark**: Het wagenpark (FleetPage) is beveiligd met een toegangscode.
- **Interactieve FAQ**: Een uitgebreide FAQ sectie met zoekfunctionaliteit en categorie filtering.
- **SEO Geoptimaliseerd**: Compleet met Open Graph tags, Twitter cards, en relevante meta descriptions.
- **Toegankelijk (A11y)**: Focus op ARIA-labels en keyboard navigatie waar nodig.
- **Typewriter Effect**: Dynamische tekst effecten op de homepage voor een moderne look & feel.

## 📂 Project Structuur

De belangrijke mappen en bestanden in dit project:

```text
app/
├── public/                 # Statische assets (logo's, stock foto's, favicon)
│   └── images/
├── src/                    # Broncode
│   ├── components/         # Herbruikbare React componenten
│   │   ├── layout/         # Header, Footer
│   │   └── ui/             # Knoppen, Cards, etc.
│   ├── pages/              # Pagina componenten (Home, About, FAQ, Fleet, etc.)
│   ├── App.tsx             # Hoofd applicatie component (Routing setup)
│   └── main.tsx            # React entry point
├── index.html              # HTML entry point (met SEO meta tags)
├── tailwind.config.js      # Tailwind CSS configuratie
└── vite.config.ts          # Vite configuratie
```

## 🛠️ Installatie & Ontwikkeling

Volg deze stappen om het project lokaal te draaien:

### Vereisten
- [Node.js](https://nodejs.org/) (v18 of hoger aanbevolen)
- npm of yarn

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

3. **Start de ontwikkelingsserver**
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

## 🔒 Toegangscodes
- **Wagenpark (/wagenpark)**: De pagina is beveiligd. De standaard testcode is `2106`.

## 📄 Licentie & Rechten
© 2026 Hellings Delivery. Alle rechten voorbehouden.
Code en design zijn eigendom van Hellings Delivery.
