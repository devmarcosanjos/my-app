import {ReactNode} from 'react'
type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-base-100'>{children}</div>
  )
}

export default Layout
