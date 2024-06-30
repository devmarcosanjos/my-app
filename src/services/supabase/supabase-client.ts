import {SUPABASE_ANON_KEY, SUPABASE_URL} from '@/config/config'
import {createBrowserClient} from '@supabase/ssr'

import {Database} from './supabase-types'

function createClient() {
  return createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
}

export const supabase = createClient()
