// supabase-config.js
// HyperStudy SaaS - Supabase Configuration

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY_HERE';

// Initialize Supabase client (only if library is loaded)
export const supabase = typeof window !== 'undefined' && window.Supabase 
  ? window.Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

if (supabase) {
  console.log("%c✅ Supabase client initialized - Ready for real auth & database", "color: #22c55e; font-weight: bold");
} else {
  console.log("%cSupabase config loaded (demo mode)", "color: #eab308");
}
