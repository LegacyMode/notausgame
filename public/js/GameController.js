import { Game } from './Game.js'

console.log('hiernach game init')
Game.init()
const loop = setInterval(Game.gameLoop, 20)
//Game.gameLoop()
