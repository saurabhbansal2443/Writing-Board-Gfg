const colorInput = document.getElementById("strokeColor");
const brushSizeInput = document.getElementById("brushSize");
const penBtn = document.getElementById("pen");
const eraserBtn = document.getElementById("eraser");
const squareBtn = document.getElementById("square");
const cleanUpBtn = document.getElementById("cleanup");
const downloadImageBtn = document.getElementById("downloadImage");

const canvas = document.getElementById("canvas");
// this step will give us a object of canvas
// which has property to write on canvas and a lot of other things

canvas.height = 400;
canvas.width = 800;

const ctx = canvas.getContext("2d");

console.log(ctx);

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#000000";
let isdrawing = false;

function startDraw(e) {
  isdrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (isdrawing == false) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function stopDraw() {
  isdrawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);
