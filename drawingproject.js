var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "grey";
canvas.fillRect(0,0,1000,1000);
//rectangle
canvas.fillStyle = "pink";
canvas.fillRect(80, 150, 100, 100);
//triangle
canvas.beginPath();
canvas.moveTo(75,50);
canvas.lineTo(100,75);
canvas.lineTo(100,25);
canvas.fill();
//another
canvas.beginPath();
canvas.moveTo(100,100);
canvas.lineTo(125,125);
canvas.lineTo(125,75);
canvas.fill();

canvas.beginPath();
canvas.arc(300, 150, 100, 5, 4*Math.PI);
canvas.stroke();
