import GameDisplay from './GameDisplay.js'
import { Controller } from './Controller.js'
import { Level } from './Level.js'

export let Game = {
  player: null,
  display: null,
  level: 'splash',
  started: false,

  init() {
    this.display = new GameDisplay()
    console.log('Game Initialized..')
    Controller.init()
    Level.render()
  },

  gameStart() {
    if (!this.started) {
      this.started = true
      this.level = 'woods'
      console.log('Next level...' + this.level)
    }
  },

  gameLoop() {
    if (Controller.left || Controller.right || Controller.enter || Controller.jump) {
      console.log('GameLoop Input Enter:' + Controller.enter)
      console.log('GameLoop Input Left:' + Controller.left)
      console.log('GameLoop Input Right:' + Controller.right)
      console.log('GameLoop Input Jump:' + Controller.jump)
    }
    Level.render()

  }

}
