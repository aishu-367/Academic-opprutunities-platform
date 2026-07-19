// Change this:
// import { createClient } from '@/lib/supabase';

// To this:
import { supabase } from '@/lib/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Ensure this line has 'export const'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)