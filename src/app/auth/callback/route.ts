// router handler (api endpoint)

import {NextResponse} from 'next/server'

import {APP_URL} from '@/config/config'
import {createUser, getUserById} from '@/server/actions/users/users.actions'
import {createClient} from '@/services/supabase/supabase-server'

export async function GET(request: Request) {
  const supabase = createClient()

  const {searchParams} = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${APP_URL}/login?fail1=true`)
  }

  const {error, data: session} = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return NextResponse.redirect(`${APP_URL}/login?fail=true`)
  }

  try {
    const res = await getUserById(session.user.id)

    if (!res)
      await createUser({
        id: session.user.id,
        email: session.user.user_metadata?.email,
        name: session.user.user_metadata?.full_name,
      })

    return NextResponse.redirect(`${APP_URL}/admin`)
  } catch (error) {
    return NextResponse.redirect(`${APP_URL}/login?fail=true`)
  }
}
