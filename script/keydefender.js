window.onload = function() {
    addCanvases();
}
function addCanvases() {
    createCanvas("background", "game");
    createCanvas("keyfender", "game");
    createCanvas("overlay", "game");
}
function createCanvas(name, parentID) {
    let parent = document.getElementById(parentID);
    let canvas = document.createElement("canvas");
    canvas.classList.add(name);
    parent.appendChild(canvas);
}