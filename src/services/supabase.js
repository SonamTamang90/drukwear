import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hwyihgcpbtlmgrjgpdcw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eWloZ2NwYnRsbWdyamdwZGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1Mzg2MzAsImV4cCI6MjA0MTExNDYzMH0.uzdEMYfNndrs3bRL8f_Fn3QpcEy4pmV5IUrrcfl2Lnk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
