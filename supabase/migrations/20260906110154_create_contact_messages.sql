/*
# Create contact_messages table for portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `read` (boolean, default false) — whether Mahesh has read the message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio site (no sign-in screen), so policies allow anon + authenticated to INSERT (visitors sending messages) but only allow read access to authenticated users (so the portfolio owner can read messages after signing in, and visitors cannot read other people's messages).
- Actually, since there's no auth flow built, we allow anon INSERT only. SELECT/UPDATE/DELETE are restricted to authenticated (owner reads messages in Supabase dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert new contact messages
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users (portfolio owner) to read messages
DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to mark messages as read
DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Allow authenticated users to delete messages
DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);