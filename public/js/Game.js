import GameDisplay from './GameDisplay.js'
import { Controller } from './Controller.js'
import { Level } from './Level.js'

export let Game = {
  player: null,
  display: null,
  level: 'splash',

  init() {
    this.display = new GameDisplay()
    console.log('Game Initialized..')
    Controller.init()
    Level.render()
  },

  renderLevel() {

  },

  gameLoop() {
    console.log('Has enter been pressed?' + Controller.enter)
    Level.render()
    if (Controller.enter) {
      this.level = 'woods'
      clearInterval(this.gameLoop)
    }

  }

}
