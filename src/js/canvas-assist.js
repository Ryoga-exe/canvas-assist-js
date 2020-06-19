function createCanvas(id, dom = document.body, msg = 'Your browser does not support HTML5 Canvas.') {
    let canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.innerHTML = msg;
    dom.appendChild(canvas);
}

function canvasAssist(id, mode = 'fixed', width = 640, height = 480) {
    this.canvas = {
        c      : document.getElementById(id),
        ctx    : document.getElementById(id).getContext('2d'),
        width  : width,
        height : height,
        mode   : mode,
    };
    this.canvas.c.width  = width;
    this.canvas.c.height = height;
    this.setMode = function(m) {
        this.canvas.mode = m;
        switch(m) {
            case fixed:
                break;
            case responsive:
                break;
            case resizeToSame:
                break;
            case fullscreen:
                break;
            case max-size:
                break;
            default:
                break;
        }
    }
    this.changeSize = function(width, height) {
        this.canvas.c.width  = this.canvas.width  = width;
        this.canvas.c.height = this.canvas.height = height;
    }
    this.init = function() {
    }
    this.update = function() {
    }
}

/*
class CanvasAssist {
    constructor(id, mode = 'fixed', width = 640, height = 480){
        this. _canvas = document.getElementById(id);
        this._ctx = _canvas.getContext('2d');
        this._canvas.width  = this._width  = width;
        this._canvas.height = this._height = height;
        this._mode = mode;
    }
    getCanvas = () => this._canvas;
    init() {

    }
    update() {

    }
}
*/

async function getJSON(fileName) {
    let jsonContent;
    await fetch(fileName).then
        (r => r.text()).then(t => {
        jsonContent = JSON.parse(t);
        });
    return jsonContent;
}