'use client'

import {useAuth} from './_hooks/use-auth'

const LoginPage = () => {
  // MOBX:
  // é estado que afeta mais de uma página? SIM
  // é alguma configuração global? SIM
  //

  // HOOKS
  // Regra de negócio

  const {login} = useAuth()

  return (
    <div className='flex w-[400px] flex-col items-center rounded-md bg-base-content p-10'>
      <h1 className='text-2xl font-bold text-base-100'>Login</h1>

      <div className='mt-10'>
        <div className='btn btn-ghost btn-wide bg-[#4285F4] hover:bg-[#4085f4]' onClick={login}>
          Entrar com Google
        </div>
      </div>
    </div>
  )
}

export default LoginPage
