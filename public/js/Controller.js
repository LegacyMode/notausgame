export let Controller = {
  left: false,
  right: false,
  jump: false,
  enter: false,

  init() {
    window.addEventListener("keydown", this.keyListener)
    window.addEventListener("keyup", this.keyListener)
  },

  keyListener(e) {
    let keyState = (e.type == "keydown") ? true: false;
    console.log()
    switch(e.keyCode) {
      case 13:
        this.enter = keyState
        console.log('enter')
      break;
      case 37:
        this.left = keyState
        console.log('left')
      break;
      case 38:
        this.jump = keyState
        console.log('jump')
      break;
      case 39:
        this.right = keyState
        console.log('right')
      break;
    }
  }

}
