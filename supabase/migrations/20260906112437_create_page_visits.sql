/*
# Create page_visits table for visitor counter

1. New Tables
- `page_visits`
  - `id` (int, primary key, always 1) — singleton row
  - `count` (bigint, not null, default 0) — total visit count
  - `updated_at` (timestamptz, default now()) — last increment time

2. Security
- Enable RLS on `page_visits`.
- This is a no-auth portfolio site. Allow anon + authenticated to SELECT (so the footer can display the count) and to call the increment function.
- The increment is done via a SECURITY DEFINER function `increment_page_visits()` so the anon role can safely increment without direct UPDATE table privileges.

3. Functions
- `increment_page_visits()` — SECURITY DEFINER function that increments the count by 1 and returns the new count. Creates the singleton row if it doesn't exist.
*/

CREATE TABLE IF NOT EXISTS page_visits (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

-- Insert the singleton row if it doesn't exist
INSERT INTO page_visits (id, count)
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the visit count
DROP POLICY IF EXISTS "anon_select_page_visits" ON page_visits;
CREATE POLICY "anon_select_page_visits"
ON page_visits FOR SELECT
TO anon, authenticated
USING (true);

-- SECURITY DEFINER function to increment the visit count atomically
-- This allows the anon role to increment without direct UPDATE privileges on the table
CREATE OR REPLACE FUNCTION increment_page_visits()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count bigint;
BEGIN
  INSERT INTO page_visits (id, count)
  VALUES (1, 1)
  ON CONFLICT (id) DO UPDATE
    SET count = page_visits.count + 1,
        updated_at = now()
  RETURNING count INTO new_count;

  RETURN new_count;
END;
$$;

-- Grant execute to anon and authenticated
GRANT EXECUTE ON FUNCTION increment_page_visits() TO anon, authenticated;
