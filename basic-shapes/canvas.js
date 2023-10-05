var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//rectangle
c.fillStyle = "lightpink";
c.fillRect(50, 50, 70, 50);
c.fillRect(150, 150, 50, 50);
c.fillRect(250, 250, 70, 50);

//line
c.beginPath();
c.moveTo(500,300);
c.lineTo(500,100);
c.stroke();

c.beginPath();
c.moveTo(600,100);
c.lineTo(505,200);
c.lineTo(600,300);
c.strokeStyle = "blue";
c.stroke();

//arcs / circle

for (var i = 0; i < 5; i++) {
    var x = Math.random() * window.innerWidth;   
    var y = Math.random() * window.innerHeight;   
    c.beginPath();
    c.arc(x,y, 40, 0, Math.PI * 2, false);
    c.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);
    c.stroke();
}
