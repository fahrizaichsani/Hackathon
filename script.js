const gameContainer = document.body;
const catcher = document.getElementById("catcher");
let score = 0;

function moveCatcher() {
    document.addEventListener("mousemove", e => {
        let mousePosition = e.clientX;
        catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`
    })
}

function createItem() {
    const item = document.createElement("div");
    const posLeft = Math.random() * gameContainer.clientWidth;
    item.classList.add("item");
    item.style.top = "50px";
    item.style.left = `${posLeft}px`;
    gameContainer.appendChild(item);
}

function moveItem() {
    const item = document.querySelector(".item");
    if (!item) {
        createItem();
    }

    let posTop = item.offsetTop + 1;
    item.style.top = `${posTop}px`;

    if (posTop > gameContainer.clientHeight) {
        gameContainer.removeChild(item);
        createItem();
    }
}

function start() {
    moveCatcher();
    setInterval(moveItem, 10);
}

start();