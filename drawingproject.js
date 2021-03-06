var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//canvas.fillStyle = "LightSkyBlue";
//canvas.fillRect(10,10,10000,10000);
//face
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
//csun!
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(300, 250, 200, 5, 4*Math.PI);
canvas.stroke();
canvas.fill();

//right eye
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(940,550,20,0,2*Math.PI,true);
canvas.fill();
//left eye
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(850,550,20,0,2*Math.PI,true);
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
//hat brim
canvas.beginPath();
canvas.fillStyle = "white";
canvas.fill();
canvas.fillRect(835,475,130,20);
//facial hair beard
canvas.beginPath();
canvas.fillStyle = "DimGrey";
canvas.fillRect(800,695,200,50);
canvas.fill();
////facial hair beard left
canvas.beginPath();
canvas.fillStyle = "DimGrey";
canvas.fillRect(800,515,25,190);
canvas.fill();
////facial hair beard right
canvas.beginPath();
canvas.fillStyle = "DimGrey";
canvas.fillRect(975,515,25,190);
canvas.fill();
//suit
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(850,745,100,190);
canvas.fill();
//suit style
canvas.beginPath();
canvas.fillStyle = "white";
canvas.moveTo(945,745);
canvas.lineTo(900,775);
canvas.lineTo(855,745);
canvas.fill();
//leg
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(850,935,30,170);
canvas.fill();
//leg
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(920,935,30,170);
canvas.fill();
//ground
canvas.beginPath();
canvas.fillStyle = "green";
canvas.fillRect(0,1115,2000,3000);
canvas.fill();
//shoe
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(920,1100,60,30);
canvas.fill();
//shoe
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(820,1100,60,30);
canvas.fill();
//left arm
canvas.beginPath();
canvas.lineWidth=25;
canvas.strokeStyle = "black";
canvas.moveTo(945,760);
canvas.lineTo(1145,790);
canvas.stroke();

//right arm
canvas.beginPath();
canvas.moveTo(855,760);
canvas.lineTo(655,790);
canvas.stroke();

//tree
canvas.beginPath();
canvas.fillStyle = "#996633";
canvas.fillRect(1600,820,50,300);
canvas.fill();

//treetop
canvas.beginPath();
canvas.fillStyle = "#00cc44";
canvas.fillRect(1550,820,150,150);
canvas.fill();
