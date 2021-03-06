let canvas = document.querySelector('#state');
let ctx = canvas.getContext('2d');
let saveBtn = document.querySelector('.save');
let restoreBtn = document.querySelector('.restore');

// ctx.moveTo(500, 50);
// ctx.lineTo(300, 400);
// ctx.lineTo(700, 400);
// ctx.lineTo(500, 50);
// ctx.fill()

ctx.strokeRect(300, 200, 400, 200);
ctx.fillRect(300, 200, 400, 200);

let savedData;
saveBtn.addEventListener('click', () => {
    savedData = ctx.getImageData(0, 0, 1000, 600);
    ctx.beginPath();
    ctx.fillStyle = '#ff0000'
    ctx.arc(500, 300, 50, 0, 2 * Math.PI);
    ctx.fill()
});

restoreBtn.addEventListener('click', () => {
   ctx.putImageData(savedData, 0, 0) 
});
