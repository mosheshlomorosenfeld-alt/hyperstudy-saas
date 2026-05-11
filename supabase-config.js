// supabase-config.js
// =============================================
// HyperStudy - Supabase Configuration
// Replace with your real credentials when ready
// =============================================

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY_HERE';

// For development/demo only
export const supabase = window.Supabase ? 
  window.Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

console.log("%cSupabase config loaded - Ready for real authentication", "color: #eab308");
