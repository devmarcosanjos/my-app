import {cookies} from 'next/headers'

import {SUPABASE_URL} from '@/config/config'
import {SUPABASE_ROLE} from '@/config/config-server'
import {createServerClient} from '@supabase/ssr'

import {Database} from './supabase-types'
export const createClient = () => {
  const cookieStore = cookies()

  return createServerClient<Database>(SUPABASE_URL, SUPABASE_ROLE, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options))
      },
    },
  })
}
