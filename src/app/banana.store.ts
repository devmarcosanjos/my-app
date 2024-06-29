import {makeAutoObservable} from 'mobx'

class Banana {
  constructor() {
    makeAutoObservable(this)
  }

  contador = 0

  setContador() {
    console.log(this)
    this.contador += 1
  }
}

export const banana = new Banana()
