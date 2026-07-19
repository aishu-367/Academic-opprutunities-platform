<<<<<<< HEAD
// Change this:
// import { createClient } from '@/lib/supabase';

// To this:
import { supabase } from '@/lib/supabase';
=======
import { createClient } from '@supabase/supabase-js'
>>>>>>> 3e899b8e50a2b40c38021e487ac5732d84aceb5f

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Ensure this line has 'export const'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)