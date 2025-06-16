import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://swmcazflmgccgmmgutcn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3bWNhemZsbWdjY2dtbWd1dGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MzkwNDEsImV4cCI6MjA2NTExNTA0MX0.PXsrNpYC_MFK-TuxBH2TlioSuniKVsxCdgw51KES0XU";
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
