// router handler (api endpoint)

import {APP_URL} from '@/config/config'

import {createClient} from '@/services/supabase/supabase-server'
import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  const supabase = createClient()

  const {searchParams} = new URL(request.url)
  const code = searchParams.get('code')

  console.log({code})

  if (!code) {
    return NextResponse.redirect(`${APP_URL}/login?fail=true`)
  }

  try {
    const {error, data} = await supabase.auth.exchangeCodeForSession(code)

    console.log({data})

    // console.log({FIRSTERROR: error})

    if (error) {
      return NextResponse.redirect(`${APP_URL}/login?fail=true`)
    }
  } catch (error) {
    // console.log({error})
  }
  return NextResponse.json({code})
}
