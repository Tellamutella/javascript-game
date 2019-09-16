// // The Game manages the kitten and the wools.
// // The game is set up in such a way, that's easy to add more wools later if needed.
// class Game {

//     constructor() {
//         this.kitten = new Kitten()
//         this.wools = [new Wool()]
//         this.score = 0
//         this.start()
//     }

//     start() {
//         var fixThis = this
//         // Every time we hit a key, we're checking for collision.
//         // In case your game has moving elements all the time,
//         // you want to check for collision every time you update the dom / redraw the canvas (if you use canvas).
//         window.addEventListener("keydown", function() {
//             if(fixThis.checkCollisionWool()) {
//                 fixThis.score++
//                 fixThis.updateScore()
//                 debugger

//             }
//         })
//     }

//     updateScore() {
//         document.getElementById("score").innerHTML = this.score
//     }
//     // Checks for collission between the wools and the kitten.
//     checkCollisionWool() {
//         debugger
//         var wools = this.wools
//         var kitten = this.kitten
//         for(let i =0; i < wools.length; i++) {
//             if(isCollide(kitten.htmlRef, wools[i].htmlRef)) {
//                 wools[i].appearRandom(this.kitten)
//                 this.checkCollisionWool()
//                 return true
//             }
//         }
//         return false
//     }
// }
// ///////////////////////////////////////////////
// class Kitten {

//     constructor(){
//         this.htmlRef = document.getElementById("kitten")
//         // After creating the kitty, we're iniating the controls.
//         // The kitty is in charge of it's own life. It's an independent kitty. You go kitty!
//         // Therefore initiateControls is a method of Kitten, not of Game. We are encapsulating the
//         // kitty functionality and hiding it from Game.
//         this.initiateControls()
//     }

//     initiateControls() {
//         var kitten = this.htmlRef
//         window.addEventListener("keydown", function(e){
//             switch(e.key) {
//                 case("ArrowRight"):
//                     kitten.style.left = `${kitten.offsetLeft + 10}px`
//                 break;
//                 case("ArrowLeft"):
//                     kitten.style.left = `${kitten.offsetLeft - 10}px`
//                 break;
//                 case("ArrowUp"):
//                     kitten.style.top = `${kitten.offsetTop - 10}px`
//                 break;
//                 case("ArrowDown"):
//                     kitten.style.top = `${kitten.offsetTop + 10}px`
//                 break;
//             }
//         })
//     }
// }

// //////////////////////////////////////////
// class Wool {

//     constructor(game){
//         // Lot of stuff happening here. There's no wool html element by default.
//         // Part of creating a Wool instance, is adding its html to the body.
//         var body = document.getElementsByTagName("body")[0]
//         var img = document.createElement("img")
//         img.setAttribute("src", "./images/wool.png")
//         img.setAttribute("class", "wool")
//         this.htmlRef = img
//         body.appendChild(this.htmlRef)
//         this.appearRandom = this.appearRandom.bind(this)
//         // We are adding the current Wool instance that's created to the Wool class/prototype.
//         // We are doing this, so that a Wool instance can later check if it's colliding
//         // with any other wools without asking Game. This wools property is shared by all
//         // wools. Such a property is called 'static'.
//         this.appearRandom()
//         Wool.wools.push(this)
//         setInterval(this.appearRandom, 4500)
//     }

//     appearRandom() {
//         var wool = this.htmlRef
//         wool.style.display = "block"
//         var leftPercentage = `${Math.random() * 100}%`
//         var topPercentage = `${Math.random() * 100}%`

//         wool.style.left = leftPercentage
//         wool.style.top = topPercentage
//         // Calling the static method to check collision with other wools
//         // and with kitten separately.
//         if(Wool.collision(wool)) {
//             this.appearRandom()
//         }
//     }
// }








// // Defining a static property.
// Wool.wools = []
// // Defining a static method.
// Wool.collision = function(wool) {
//     var wools = Wool.wools
//     for(let i = 0 ; i < wools.length; i++) {
//         if(isCollide(wool, wools[i].htmlRef)&& wool != wools[i].htmlRef) return true
//     }
// }
// // This function doesn't really belong to a specific class. It's used in Wool and Game.
// // Therefore, this can be a global helper function.
// function isCollide(element1, element2) {
//     var a = {
//         y: 100 - element1.offsetTop - element1.height,
//         x: element1.offsetLeft,
//         height: element1.height,
//         width: element1.width
//     }
//     var b = {
//         y: 100 - element2.offsetTop - element2.height,
//         x: element2.offsetLeft,
//         height: element2.height,
//         width: element2.width
//     }

//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }

// new Game()
