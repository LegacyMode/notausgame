import GameDisplay from './GameDisplay.js'
import { Controller } from './Controller.js'
import { Level } from './Level.js'
import { Player } from './Player.js'

export let Game = {
  player: null,
  display: null,
  level: 'splash',
  started: false,

  init() {
    this.display = new GameDisplay()
    // this.player = this.display.splashScreen.player
    console.log('Game Initialized..')
    this.started = true
    this.player = 'joschi'
    Controller.init()
    Level.render()
    Player.render()
    // Update
  },

  // gameStart() {
  //   if (!this.started) {
  //     this.started = true
  //     this.level = 'woods'
  //     console.log('Next level...' + this.level)
  //   }
  // },

  gameLoop() {
    if (Controller.left || Controller.right || Controller.enter || Controller.jump) {
      console.log('GameLoop Input Enter:' + Controller.enter)
      console.log('GameLoop Input Left:' + Controller.left)
      console.log('GameLoop Input Right:' + Controller.right)
      console.log('GameLoop Input Jump:' + Controller.jump)
    }
    Level.render()
    Player.render()
  },
  loop() {
    requestAnimationFrame(this.gameLoop)
  }

}
