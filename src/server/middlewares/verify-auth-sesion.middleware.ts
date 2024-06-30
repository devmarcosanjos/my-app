import {NextRequest, NextResponse} from 'next/server'

import {createClient} from '@/services/supabase/supabase-server'

export async function verifyAuthSession(request: NextRequest, response: NextResponse) {
  const supabase = createClient()

  const pathname = request.nextUrl.pathname

  const {data: authenticatedUser} = await supabase.auth.getUser()

  if (authenticatedUser.user) {
    if (pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    return response
  }

  if (pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}
