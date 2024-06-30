import {MiddlewareConfig, NextRequest} from 'next/server'

import {updateAuthSession} from '@/server/middlewares/update-auth-session.middleware'
import {verifyAuthSession} from '@/server/middlewares/verify-auth-sesion.middleware'

export async function middleware(request: NextRequest) {
  let response = await updateAuthSession(request)
  response = await verifyAuthSession(request, response)

  return response
}

export const config: MiddlewareConfig = {
  matcher: ['/admin/:path*', '/login/:path*'],
}
