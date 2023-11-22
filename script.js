const gameContainer = document.body;
const catcher = document.getElementById("catcher");

function moveCatcher() {
    document.addEventListener("mousemove", e => {
        let mousePosition = e.clientX;
        catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`
    })
}
moveCatcher();