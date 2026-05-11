// supabase-config.js
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-public-key-here';

export const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example usage in app.html:
// await supabase.auth.signInWithPassword({ email, password });
