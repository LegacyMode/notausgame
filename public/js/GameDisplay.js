import { Game } from './Game.js'

export default class GameDisplay {
  constructor() {
    this.width = window.innerWidth
    this.height = this.width / 16 * 8
    this.view = document.createElement('canvas')
    this.view.width = this.width
    this.view.height = this.height
    this.container = document.querySelector('#app')
    this.container.appendChild(this.view)
  }
}
