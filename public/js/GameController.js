import { Game } from './Game.js'
import draw_grid from './helper.js'

console.log('hiernach game init')
Game.init()
//draw_grid(Game.display.view.getContext("2d"))
const loop = setInterval(Game.gameLoop, 20)
//Game.gameLoop()
