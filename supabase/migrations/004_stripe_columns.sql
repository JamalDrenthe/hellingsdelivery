-- Migration 004: Add Stripe columns
-- Run in Supabase Dashboard > SQL Editor

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;

ALTER TABLE subscription_plans
  ADD COLUMN IF NOT EXISTS stripe_price_id_yearly TEXT;

-- After running: set your Stripe Price IDs using the UPDATE statements below.
-- Replace the values with actual Stripe Price IDs from your Stripe Dashboard.

-- UPDATE subscription_plans SET
--   stripe_price_id         = 'price_MONTHLY_ID_HERE',
--   stripe_price_id_yearly  = 'price_YEARLY_ID_HERE'
-- WHERE name = 'Membership';

-- UPDATE subscription_plans SET
--   stripe_price_id         = 'price_MONTHLY_ID_HERE',
--   stripe_price_id_yearly  = 'price_YEARLY_ID_HERE'
-- WHERE name = 'Spoedritverzekering';
