const gameContainer = document.body;
const main = document.getElementById("main");
const catcher = document.getElementById("catcher");
const gifkucing = document.getElementById('gifkucing');
const parentNyawa = document.getElementById("parentNyawa");
const idScore = document.getElementById("score");
const startGame = document.getElementById("startgame");
let score = 0;
let itemSpeed = 1;
let lives = 3;
let game;

function moveCatcher(event) {
    let mousePosition = event.clientX;
    catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`
    gifkucing.style.left = `${mousePosition - gifkucing.clientWidth/2}px`
    
}

function createItem() {
    const item = document.createElement("div");
    const posLeft = Math.random() * (gameContainer.clientWidth - 50);
    item.classList.add("item");
    item.style.top = "50px";
    item.style.left = `${posLeft}px`;
    main.appendChild(item);
}

function moveItem() {
    const item = document.querySelector(".item");
    const parentNyawa = document.getElementById("parentNyawa");
    const nyawa1 = document.getElementById("nyawa1");
    const nyawa2 = document.getElementById("nyawa2");
    const nyawa3 = document.getElementById("nyawa3");

    if (!item) {
        createItem();
        return;
    }

    let posTop = item.offsetTop + itemSpeed;
    item.style.top = `${posTop}px`;

    if (posTop > gameContainer.clientHeight) {
        main.removeChild(item);
        createItem();
        lives--;
        switch (lives) {
            case 2:
                parentNyawa.removeChild(nyawa1);
                break;
            case 1:
                parentNyawa.removeChild(nyawa2);
                break;
            case 0:
                parentNyawa.removeChild(nyawa3);
                break;  
        }

        if (lives === 0) {
            gameOver();
        }
    }


}

function addScore() {
    const items = document.querySelectorAll(".item");
    const number = document.getElementById("scoreText");
    number.innerHTML = `score: ${score}`
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (checkCatcherCollision(catcher, item)) {
            main.removeChild(item);
            createItem();
            itemSpeed += 0.1;
            score++;
        }
    }
}

function checkCatcherCollision(catcher, fallingObject) {
    const catcherRect = catcher.getBoundingClientRect();
    const objectRect = fallingObject.getBoundingClientRect();

    return (
      catcherRect.left < objectRect.right &&
      catcherRect.right > objectRect.left &&
      catcherRect.top < objectRect.bottom &&
      catcherRect.bottom > objectRect.top
    );
}

function start() {
    idScore.style.display = "flex";
    gifkucing.style.display = "block";
    parentNyawa.style.display = "inline-flex";
    startGame.style.display = "none";
    document.addEventListener("mousemove", moveCatcher);
    game = setInterval(() => {moveItem(); addScore();}, 10);
}

function gameOver() {
    const item = document.querySelector(".item");
    
    document.removeEventListener("mousemove", moveCatcher);
    setTimeout(() => {
        alert(`Game Over! Your score is ${score}`);
    }, 100);
    clearInterval(game);
    main.removeChild(item);
}
