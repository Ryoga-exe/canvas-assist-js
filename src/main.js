fetch('js/canvas-assist.js').then(r=>r.text()).then(t=>eval(t)).then(()=>{
    createCanvas('canvas');
});