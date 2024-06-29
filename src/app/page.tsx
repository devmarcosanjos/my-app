'use client'

import {observer} from 'mobx-react-lite'
import {banana} from './banana.store'

function Home() {
  return (
    <div>
      <button className='btn btn-secondary btn-wide' onClick={() => banana.setContador()}>
        Click me
        {banana.contador}
      </button>
    </div>
  )
}

export default observer(Home)
