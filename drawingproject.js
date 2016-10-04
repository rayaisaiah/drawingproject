var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "grey";
canvas.fillRect(10,10,10000,10000);
//rectangle
canvas.beginPath();
canvas.fillStyle = "Khaki";
canvas.fillRect(800, 500, 200, 200);
canvas.fill();
//nose
canvas.beginPath();
canvas.fillStyle = "DarkSalmon";
canvas.moveTo(900,565);
canvas.lineTo(960,580);
canvas.lineTo(900,600);
canvas.fill();
//circle
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(300, 150, 100, 5, 4*Math.PI);
canvas.stroke();
canvas.fill();
//right eye
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(940,550,4,0,2*Math.PI,true);
canvas.fill();
//left eye
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(850,550,4,0,2*Math.PI,true);
canvas.fill();
//mouth
canvas.beginPath();
canvas.fillStyle = "black";
//canvas.arc(200,100,25,0,Math.PI,true);
canvas.fill();
canvas.fillRect(850,650,95,8);
//hat
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(835,300,130,200);
canvas.fill();
canvas.fillRect(750,495,300,20);
//facial hair
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(835,300,130,200);
canvas.fill();
canvas.fillRect(750,495,300,20);
