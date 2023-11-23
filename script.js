const gameContainer = document.body;
const main = document.getElementById("main");
const catcher = document.getElementById("catcher");
const gifkucing = document.getElementById('gifkucing')
let score = 0;
let itemSpeed = 1;
let lives = 3;

function moveCatcher() {
    document.addEventListener("mousemove", e => {
        let mousePosition = e.clientX;
        catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`

        gifkucing.style.left = `${mousePosition - gifkucing.clientWidth/2}px`
    })
}

function createItem() {
    const item = document.createElement("div");
    const posLeft = Math.random() * gameContainer.clientWidth;
    item.classList.add("item");
    item.style.top = "50px";
    item.style.left = `${posLeft}px`;
    main.appendChild(item);
}

function moveItem() {
    const item = document.querySelector(".item");

    if (!item) {
        createItem();
    }

    let posTop = item.offsetTop + itemSpeed;
    item.style.top = `${posTop}px`;

    if (posTop > gameContainer.clientHeight) {
        main.removeChild(item);
        createItem();
        lives--;
        if (lives === 0) {
            gameOver();
        }
    }
}

function addScore() {
    const items = document.querySelectorAll(".item");
    
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
    moveCatcher();
    setInterval(() => {moveItem(); addScore();}, 10);
}

function gameOver() {
    alert(`Game Over!`);
}

start();