function createCanvas(id, dom = document.body, msg = 'Your browser does not support HTML5 Canvas.') {
    let canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.innerHTML = msg;
    dom.appendChild(canvas);
}

function canvasAssist(id, width = 640, height = 480, mode = 'fixed') {
    this._canvas = document.getElementById(id);
    this._ctx = this._canvas.getContext('2d');
    this._canvas.width  = this._width  = width;
    this._canvas.height = this._height = height;
    this._mode = mode;
    this.getCanvas = () => this._canvas;
    this.setMode = function(m) {
        this._mode = m;
        switch(_mode){
            case fixed:
                break;
            case responsive:
                break;
            case fullscreen:
                break;
            case resizeToSame:
                break;
            default:
                break;
        }
    }
    this.init = function() {
    }
    this.update = function() {
    }
}