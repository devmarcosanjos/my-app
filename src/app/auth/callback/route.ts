// router handler (api endpoint)

import {NextResponse} from 'next/server'

import {APP_URL} from '@/config/config'
import {createClient} from '@/services/supabase/supabase-server'

export async function GET(request: Request) {
  const supabase = createClient()

  const {searchParams} = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${APP_URL}/login?fail1=true`)
  }

  const {error, data: session} = await supabase.auth.exchangeCodeForSession(code)

  console.log(session.user?.id)

  if (error) {
    return NextResponse.redirect(`${APP_URL}/login?fail2=true`)
  }

  const res = await supabase.from('users').select('*').eq('id', session.user.id).maybeSingle()

  if (res.error) return NextResponse.redirect(`${APP_URL}/login?fail3=true`)

  if (res.data) return NextResponse.redirect(`${APP_URL}/admin`)

  const resCreate = await supabase
    .from('users')
    .insert({
      id: session.user.id,
      email: session.user.user_metadata?.email,
      name: session.user.user_metadata?.full_name,
    })
    .select()

  console.log('DATA', resCreate.data)
  console.log('\n')
  console.log('ERROR:', resCreate.error)

  if (resCreate.data) {
    return NextResponse.redirect(`${APP_URL}/admin`)
  }

  return NextResponse.json(true)
}
