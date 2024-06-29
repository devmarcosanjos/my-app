import {ReactNode} from 'react'
type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return <div className='h-full w-full bg-red-300'>{children}</div>
}

export default Layout
