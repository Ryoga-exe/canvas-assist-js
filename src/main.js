fetch('https://github.com/Ryoga-exe/canvas-assist-js/blob/master/src/js/canvas-assist.js').then(r=>r.text()).then(t=>eval(t)).then(()=>{
    createCanvas('canvas');
});
