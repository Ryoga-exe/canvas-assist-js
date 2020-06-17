function createCanvas(id, dom = document.body) {
    let canvas = document.createElement('canvas');
    canvas.id = id;
    dom.appendChild(canvas);
}