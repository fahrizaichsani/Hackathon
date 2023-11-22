const gameContainer = document.body;
const catcher = document.getElementById("catcher");
const gifkucing = document.getElementById('gifkucing')
function moveCatcher() {
    document.addEventListener("mousemove", e => {
        let mousePosition = e.clientX;
        catcher.style.left = `${mousePosition - catcher.clientWidth/2}px`

        gifkucing.style.left = `${mousePosition - gifkucing.clientWidth/2}px`
    })
}
moveCatcher();