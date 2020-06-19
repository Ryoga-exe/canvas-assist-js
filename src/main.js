window.addEventListener("DOMContentLoaded", function() {
    createCanvas('canvas');
    canvas = new canvasAssist('canvas');
    window.addEventListener('resize', function() {
        canvas.changeSize(document.body.clientWidth, aaa);
    });
});