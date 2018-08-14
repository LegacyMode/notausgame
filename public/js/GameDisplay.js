import { Game } from './Game.js'

export default class GameDisplay {
  constructor() {
    this.width = 800 //window.innerWidth
    this.height = Math.floor(this.width / 2.3)
    this.splashScreen = document.querySelector('#splash')
    this.splashScreen.style.display = 'hidden'
    this.view = document.createElement('canvas')
    this.view.width = this.width
    this.view.height = this.height
    this.container = document.querySelector('#app')
    this.container.appendChild(this.view)
  }
}
