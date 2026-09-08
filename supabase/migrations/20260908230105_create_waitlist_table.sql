/*
# Create waitlist table for landing page sign-ups

1. New Tables
- `waitlist`
  - `id` (uuid, primary key, auto-generated)
  - `email` (text, unique, not null) — the email address of the person signing up
  - `name` (text, nullable) — optional name provided at sign-up
  - `family_member_name` (text, nullable) — optional: the family member they want to interview
  - `created_at` (timestamptz, default now()) — when they signed up

2. Security
- Enable RLS on `waitlist`.
- Allow anon + authenticated INSERT so landing page visitors can sign up without logging in.
- Allow anon + authenticated SELECT so the app can check if an email is already on the list (for duplicate prevention feedback).
- No UPDATE or DELETE policies — entries are immutable from the client.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  family_member_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_waitlist" ON waitlist;
CREATE POLICY "anon_select_waitlist" ON waitlist FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated WITH CHECK (true);
