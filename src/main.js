fetch('https://ryoga-exe.github.io/canvas-assist-js/src/js/canvas-assist.js').then(r=>r.text()).then(t=>eval(t)).then(()=>{
    createCanvas('canvas');
});
