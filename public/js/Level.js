import { Game } from './Game.js'
import draw_grid from './helper.js'

export let Level = {
    splash: {
      name: 'splashScreen',
      background: '../img/splash.png'
    },
    woods: {
      name: 'Wood Level',
      background: '../img/joschi/joschi.png' // woods.png
    },
  render() {
    if (Game.level == 'splash') {
      let bg = new Image()
      console.log(this[Game.level])
      bg.src = this[Game.level].background
      console.log('Level rendered .. ' + this[Game.level].name)
      bg.onload = () => { Game.display.view.getContext("2d").drawImage(bg, 0, 0, Game.display.width, Game.display.height) }
    } else {
      draw_grid(Game.display.view.getContext("2d"))
    }

  }
}
