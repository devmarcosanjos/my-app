import {APP_URL} from '@/config/config'
import {supabase} from '@/services/supabase/supabase-client'

export const useAuth = () => {
  const login = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${APP_URL}/auth/callback`,
      },
    })
  }

  const logout = () => {
    //
  }

  return {
    login,
    logout,
  }
}
