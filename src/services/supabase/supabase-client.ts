import {SUPABASE_ANON_KEY, SUPABASE_URL} from '@/config/config'
import {createBrowserClient} from '@supabase/ssr'

function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}

export const supabase = createClient()
