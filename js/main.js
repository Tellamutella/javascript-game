class Game {
    constructor() {
        this.player = new Player();
        this.create();
        this.doubleTime();
        this.tripleTime();
        this.quadrupleTime();
    }
    create() {
        let fixThis = this
        var zombieId = setInterval(function() {
            new Zombie(fixThis)
            playZom()
            if (fixThis.player.health < 0) {
                clearInterval(zombieId)
                removeAllZombie()
            }
        }, 400)
    }

    doubleTime() {
        let fixThis = this
        setTimeout(function() {
            fixThis.create();
            console.log(`double Time`)
        }, 7000);
    }

    tripleTime() {
        let fixThis = this
        setTimeout(function() {
            fixThis.create();
            console.log(`tripple Time`)
        }, 10000);
    }

    quadrupleTime() {
        let fixThis = this
        setTimeout(function() {
            // fixThis.create();
            // console.log(`quadruple Time time`)
            var zombieId = setInterval(function() {
                new Zombie(fixThis)
                if (fixThis.player.health < 0) {
                    clearInterval(zombieId)
                    removeAllZombie()
                }
            }, 40)
        }, 15000);
    }
}

Game.score = 0;

class Player {
    constructor() {
        this.player = document.getElementById("player");
        this.playerControl();
        player.style.left = 0
        this.health = 3;
        this.fire()
    }

    fire() {
        let fixThis = this
        var intervalId = setInterval(function() {
            new Arrow();
            if(fixThis.health === 0){
                clearInterval(intervalId)
            }
        }, 200)
    }

    playerControl() {
        window.addEventListener("keydown", function(e) {
            switch (e.key) {
                case ("ArrowRight"):
                    if (parseInt(player.style.left, 10) < 850) {
                        player.style.left = `${player.offsetLeft + 25}px`
                    }
                    break;
                case ("ArrowLeft"):
                    if (player.style.left == `0px`) {} else {
                        player.style.left = `${player.offsetLeft - 25}px`
                    }
                    break;
            }
        })
    }
}

class Arrow {
    constructor() {
        var body = document.getElementsByTagName("body")[0]
        this.arrow = makeImg('arrow')
        this.playerPosition = player.x
        this.arrow.style.left = `${this.playerPosition}px`
        body.appendChild(this.arrow)
        this.arrowMoving = this.arrowMoving.bind(this)
        this.arrowMoving()
        this.intervalId = setInterval(this.arrowMoving, 1)
    }

    arrowMoving() {
        var arow = this.arrow
        console.log(arow)
        arow.style.top = `${arow.offsetTop - 1}px`
        if (parseInt(arow.style.top, 10) < 0) {
            arow.remove()
            clearInterval(this.intervalId)
        }
        for (var i = 0; i < Zombie.zombies.length; i++) {
            if (isCollide(arow, Zombie.zombies[i].zombie)) {
                playAudio()
                Game.score += 1
                $('#score').text(`${Game.score} points`)
                clearInterval(this.intervalId)
                clearInterval(Zombie.zombies[i].charge)
                arow.remove();
                Zombie.zombies[i].zombie.remove();
                Zombie.zombies.splice(i, 1)
            }
        }
    }
}


class Zombie {
    constructor(gameObj) {
        var body = document.getElementsByTagName("body")[0]
        this.zombie = makeImg('zombie')
        this.position = Math.floor(Math.random() * 700)
        this.zombie.style.left = `${this.position}px`
        body.appendChild(this.zombie)
        this.zombieMove = this.zombieMove.bind(this)
        Zombie.zombies.push(this)
        this.charge = setInterval(this.zombieMove, 20)
        this.gameObj = gameObj
    }

    zombieMove() {
        var zombie = this.zombie
        zombie.style.top = `${zombie.offsetTop + 2.5}px`
        if (parseInt(zombie.style.top, 10) > 750) {
            zombie.remove();
            this.gameObj.player.health--
            $(`i`).last().remove()
            if (this.gameObj.player.health === 0) {
                $('.end-btn').text(`YOU POOR CHILD YOUR SCORE IS ${Game.score}`)
                $('.end-btn').toggle('display')
            }
            clearInterval(this.charge)
        }
    }
}

function makeImg(word) {
    var img = document.createElement("img")
    img.setAttribute("src", `./images/${word}.png`)
    img.setAttribute("class", `${word}`)
    return img
}

Zombie.zombies = []

function isCollide(element1, element2) {
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

function removeAllZombie() {
    Zombie.zombies.forEach(function(element) {
        element.zombie.remove();
    })
}

$(document).ready(function() {
    $(`.start-btn`).click(function() {
        new Game();
        $(this).css("display", "none");
    })

    $(`.end-btn`).click(function(){
        location.reload();
        // new Game();
        // $(this).toggle('display')
    })
});

var x = document.getElementById("myAudio");
var y = document.getElementById('zombieSpwan')

function playZom(){
  y.play()
}

function playAudio() {
  x.play();
}


