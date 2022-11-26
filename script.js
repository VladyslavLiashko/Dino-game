const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = document.querySelector(".score");
let count = 0;

let x = document.addEventListener("keydown", function (event) {
    jump();
});
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump");

    }, 500)
    count++;
    score.textContent = "Score : " + count;
};

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`GAME OVER\n Score : ${count}`);
        count = 0;
        score.textContent = "Score : 0";
    }
}, 10)