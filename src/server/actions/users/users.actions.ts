'use server'

import {UserModel} from '@/models/user.model'
import {createClient} from '@/services/supabase/supabase-server'

export async function getUserById(id: string) {
  const supabase = createClient()

  const {data, error} = await supabase.from('users').select('*').eq('id', id).maybeSingle()

  if (error) throw error.message

  return data
}

export async function createUser(user: UserModel) {
  const supabase = createClient()
  const {data, error} = await supabase
    .from('users')
    .insert({
      id: user.id,
      email: user.email,
      name: user.name,
    })
    .select()

  if (error) throw error.message

  return data
}
