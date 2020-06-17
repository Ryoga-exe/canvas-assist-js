function createCanvas(id, dom = document.body) {
    let canvas = document.createElement('canvas');
    canvas.id = id;
    dom.appendChild(canvas);
}

function canvasAssist(id, width = 640, height = 480) {
    this._canvas = document.getElementById(id);
    this._canvas.width  = this._width  = width;
    this._canvas.height = this._height = height;
    
    this.setMode = function(mode) {
        switch(mode){
            case fixed:
                break;
            case responsive:
                break;
            case fullscreen:
                break;
            default:
                break;
        }
    }
    this.init = function() {
        
    }
}