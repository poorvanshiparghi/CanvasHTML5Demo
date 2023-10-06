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
    var x = Math.random() * 3000;   
    var y = Math.random() * 200;   
    c.beginPath();
    c.arc(x,y, 40, 0, Math.PI * 2, false);
    c.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);
    c.stroke();
}

//animted arcs
c.beginPath();
c.arc(100,500, 40, 0, Math.PI * 2, false);
c.strokeStyle = "lightgreen";
c.lineWidth = 10;
c.stroke();



function circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "purple";
        c.lineWidth = 3;
        c.stroke();
    }
    this.update = function name() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    var radius = 30;
    circleArray.push(new circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();

