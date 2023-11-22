const gameContainer = document.body;
const catcher = document.getElementById("catcher");

function moveCatcher() {
    document.addEventListener("mousemove", e => {
        let mousePosition = e.clientX;
        catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`
    })
}

function createItem() {
    const item = document.createElement("div");
    const pos = Math.random() * gameContainer.clientWidth;
    item.classList.add("item");
    item.style.top = "50px";
    item.style.left = `${pos}px`;
    gameContainer.appendChild(item);
}

moveCatcher();
createItem();