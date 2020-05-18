let canvas = document.getElementById("draw");
let w=canvas.width=window.innerWidth;
let h=canvas.height=window.innerHeight;

let context = canvas.getContext("2d");

context.lineWidth=5;
let offsetLeft = 100;
let offsetTop  = 100;
let isMouseDown=false;

clear.onclick = function clear() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}



canvas.addEventListener('mousedown', function (){
    isMouseDown=true;
})

canvas.addEventListener('mouseup', function (){
    isMouseDown=false;
    context.beginPath();
})

function choosewidth() {
    var rng=document.getElementById('r1');
    context.lineWidth=parseInt(rng.value);
}

context.fillStyle = "#C12C35";
context.strokeStyle="#C12C35";
let theInput = document.getElementById("color");
theInput.addEventListener("input", function() {
    context.fillStyle = theInput.value;
    context.strokeStyle=theInput.value;
}, false);


canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown){

        context.lineTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop);

        context.stroke();
        context.beginPath();
        context.arc(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop,context.lineWidth/2,0,Math.PI*2);

        context.fill();

        context.beginPath();
        context.moveTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop,);
    }
})

