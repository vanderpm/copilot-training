## Supabase Table Schema

Execute this SQL in your Supabase SQL Editor to create the required table:

```sql
create table scouting_reports (
  id serial primary key,
  match_number integer not null,
  team_number integer not null,
  auton jsonb,
  teleop jsonb,
  endgame jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create index on scouting_reports (match_number, team_number);
```

## Usage

1. Fill in your `supabaseUrl` and `supabaseAnonKey` in `src/supabaseClient.js`.
2. Run your app. The scouting form saves reports to Supabase!

You can extend the `auton`, `teleop`, and `endgame` fields to be structured (e.g., with specific form inputs) later as needed.
