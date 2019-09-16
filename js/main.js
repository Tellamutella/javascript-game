// class Game {
//   constructor(){
//     this.player = new Player()
//     this.zombie = [new Zombie()]
//     this.score = 0
//   }
// }




class Player {
    constructor() {
        this.player = document.getElementById("player");
        this.playerControl();
        this.arrows = []
    }
    playerControl() {
        window.addEventListener("keydown", function(e) {
          let test = this.player
          console.log(test)
            switch (e.key) {
                case ("ArrowRight"):
                    player.style.left = `${player.offsetLeft + 25}px`
                    break;
                case ("ArrowLeft"):
                    player.style.left = `${player.offsetLeft - 25}px`
                    break;
                case ("ArrowUp"):
                    new Arrow();
                    break;
            }
        })
    }
}

class Arrow {
    constructor() {
        var body = document.getElementsByTagName("body")[0]
        var img = document.createElement("img")
        img.setAttribute("src", "./images/arrow.png")
        img.setAttribute("class", "arrow")
        this.arrow = img
        body.appendChild(this.arrow)
        this.moving = this.moving.bind(this)
        this.moving()
        this.playerPosition = player.x
        setInterval(this.moving, 1)
    }
    moving() {
        var arow = this.arrow
        arow.style.left = `${this.playerPosition}px`
        arow.style.top = `${arow.offsetTop - 10}px`
    }
}

var test = new Player
