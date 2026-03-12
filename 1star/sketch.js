

let balls = [];
let n = 10; 

function setup(){
    createCanvas(400,400);
    for (let i = 0; i < n; i++) {
        const size = random(24, 24);
        balls.push(new Ball(random(width), random(height), size));
    }
}

function draw(){
    background(0);
    fill(255);
    noStroke();
    for (let b of balls) {
        b.update();
        b.checkEdges(width, height);
        b.draw(); 
    }
} 


