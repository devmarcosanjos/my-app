import {NextRequest, NextResponse} from 'next/server'

import {SUPABASE_URL, SUPABASE_ANON_KEY} from '@/config/config'
import {createServerClient} from '@supabase/ssr'

export async function updateAuthSession(request: NextRequest) {
  let response = NextResponse.next({request})

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({name, value}) => request.cookies.set(name, value))

        response = NextResponse.next({request})

        cookiesToSet.forEach(({name, value, options}) => response.cookies.set(name, value, options))
      },
    },
  })

  await supabase.auth.getUser()

  return response
}
