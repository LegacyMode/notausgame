import { Game } from './Game.js'

export let Player = {
  "joschi": {
    path: "/img/joschi/",
    standing: "joschi.png"
  },
  "niklas": {
    path: "/img/niklas/",
    sprite: "niklas.png"
  },
  "toni": {
    path: "/img/toni/",
    sprite: "toni.png"
  },
  "walking": ['walking_1.png', 'walking_2.png', 'walking_3.png', 'walking_4.png'],
  x: 0,
  y: 0,
  update() {},
  control(key) {
    if (key == 'right') { this.x = this.x + 5 }
    if (key == 'left') { this.x = this.x - 5 }
  },
  render() {
    let image = new Image();
    image.onload = () => { Game.display.view.getContext("2d").drawImage(image, this.x, this.y) }
    image.src = '..' + this[Game.player].path + this[Game.player].standing;
    console.log(image.src)
  }
}
