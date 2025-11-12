import { createClient } from "@supabase/supabase-js";

// TODO: Replace these with your actual Supabase project values
export const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co";
export const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
