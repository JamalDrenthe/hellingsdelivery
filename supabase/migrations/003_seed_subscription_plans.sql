-- ============================================================
-- Hellings Delivery – Seed subscription_plans
-- Run in Supabase Dashboard > SQL Editor
-- Safe to re-run: uses ON CONFLICT DO UPDATE
-- ============================================================

INSERT INTO subscription_plans (id, name, description, billing_interval, price, features, is_active)
VALUES
  (
    'a1b2c3d4-0001-0000-0000-000000000001',
    'Vaste Ophaalmomenten',
    'Ideaal voor zakelijke klanten met vaste logistieke behoeften. Wij komen elke dag of week op vaste tijden ophalen.',
    'month',
    14900,
    '["Tot 5 vaste ophaalmomenten per week", "Dedicated chauffeur op jouw route", "Prioriteit boven losse boekingen", "Maandelijkse rapportage", "Dedicated accountmanager", "Factuur achteraf mogelijk"]',
    true
  ),
  (
    'a1b2c3d4-0002-0000-0000-000000000002',
    'Membership',
    'Directe toegang tot ons netwerk van discrete koeriers en chauffeurs. De ultieme flexibiliteit voor veeleisende klanten.',
    'month',
    29900,
    '["Gegarandeerde beschikbaarheid per boeking", "Voorrang bij spoedritten", "Vaste ophaalmomenten in te plannen", "Spoedritverzekering optioneel", "Premium tracking dashboard", "NDA-standaard op alle ritten", "Priority klantenservice", "Maandelijkse prestatierapportage"]',
    true
  ),
  (
    'a1b2c3d4-0003-0000-0000-000000000003',
    'Spoedritverzekering',
    'Zekerheid dat er altijd snel een koeriersdienst beschikbaar is, op alle dagen van de week.',
    'month',
    37500,
    '["Garantie: snelle beschikbaarheid", "Geldig op alle dagen, ook op feestdagen", "1 spoedrit per maand inbegrepen", "Directe telefonische beschikbaarheid", "Volledig verzekerd transport", "Nationaal dekkingsgebied"]',
    true
  )
ON CONFLICT (id) DO UPDATE SET
  name        = EXCLUDED.name,
  description = EXCLUDED.description,
  price       = EXCLUDED.price,
  features    = EXCLUDED.features,
  is_active   = EXCLUDED.is_active;
