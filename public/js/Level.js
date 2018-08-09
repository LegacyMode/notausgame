import { Game } from './Game.js'

export let Level = {
    splash: {
      background: '../img/splash.png'
    },
    woods: {
      background: '../img/woods.png'
    },
  render() {
    console.log('Level rendered...')
    if (Game.level == 'woods') {
      console.log('woods')      
    }
    let bg = new Image()
    bg.src = this[Game.level].background
    console.log(this[Game.level])
    bg.onload = () => { Game.display.view.getContext("2d").drawImage(bg, 0, 0, Game.display.width, Game.display.height) }
  }
}
