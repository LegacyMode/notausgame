import { Game } from './Game.js'

export let Level = {
    splash: {
      name: 'splashScreen',
      background: '../img/splash.png'
    },
    woods: {
      name: 'Wood Level',
      background: '../img/woods.png'
    },
  render() {
    let bg = new Image()
    bg.src = this[Game.level].background
    console.log('Level rendered .. ' + this[Game.level].name)
    bg.onload = () => { Game.display.view.getContext("2d").drawImage(bg, 0, 0, Game.display.width, Game.display.height) }
  }
}
