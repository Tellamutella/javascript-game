class Player {
    constructor() {
        this.player = document.getElementById("player");
        this.playerControl();
        this.health = 3
    }
    playerControl() {
        window.addEventListener("keydown", function(e) {
            let test = this.player
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
        setInterval(this.moving, 10)
    }
    moving() {
        var arow = this.arrow
        arow.style.left = `${this.playerPosition}px`
        arow.style.top = `${arow.offsetTop - 10}px`
    }
}

class Zombie {
    constructor() {
        var body = document.getElementsByTagName("body")[0]
        var img = document.createElement("img")
        img.setAttribute("src", "./images/zombie.png")
        img.setAttribute("class", "zombie")
        this.zombie = img
        body.appendChild(this.zombie)
        this.postion = Math.floor(Math.random() * 700)
        this.spawn = this.spawn.bind(this)
        this.spawn();
        setInterval(this.spawn, 400)
    }
    spawn() {
        var zombie = this.zombie
        zombie.style.left = `${this.postion}px`
        zombie.style.top = `${zombie.offsetTop + 25}px`
    }
}

var test = new Player

setInterval(function() {
    return new Zombie
}, 500);
