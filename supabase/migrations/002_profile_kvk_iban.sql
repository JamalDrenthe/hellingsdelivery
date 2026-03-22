-- Migration 002: Add KVK number and bank account (IBAN) to profiles
-- Run in Supabase Dashboard > SQL Editor

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS kvk_number TEXT,
  ADD COLUMN IF NOT EXISTS bank_account TEXT;
