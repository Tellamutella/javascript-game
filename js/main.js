class Game {
    constructor() {
        this.player = new Player();
        this.score = 0
        // this.create();
        this.zombies = new Zombie();
    }
    create() {
        setInterval(function() {
            new Zombie()
        }, 400)
    }

}


class Player {
    constructor() {
        this.player = document.getElementById("player");
        this.playerControl();
        this.health = 3;
    }
    playerControl() {
        window.addEventListener("keydown", function(e) {
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
        console.log(this.arrow)
        this.moving = this.moving.bind(this)
        this.moving()
        this.playerPosition = player.x
        var intervalId = setInterval(this.moving, 50)
    }

    moving() {
        var arow = this.arrow
        arow.style.left = `${this.playerPosition}px`
        arow.style.top = `${arow.offsetTop - 10}px`
        Zombie.zombies.forEach(function(element) {
            if (isCollide(arow, element.zombie)) {
                console.log(`hit`)
            } else {
                console.log(`mis`)
            }
        })
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
        this.position = Math.floor(Math.random() * 700)
        this.spawn = this.spawn.bind(this)
        Zombie.zombies.push(this)
        this.spawn();
        setInterval(this.spawn, 400)
    }

    spawn() {
        var zombie = this.zombie
        zombie.style.left = `${this.position}px`
        zombie.style.top = `${zombie.offsetTop + 25}px`
    }
}

Zombie.zombies = []

function isCollide(element1, element2) {
    console.log(element1)
    var a = {
        y: 100 - element1.offsetTop - element1.height,
        x: element1.offsetLeft,
        height: element1.height,
        width: element1.width
    }
    var b = {
        y: 100 - element2.offsetTop - element2.height,
        x: element2.offsetLeft,
        height: element2.height,
        width: element2.width
    }

    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}


var test = new Game()
