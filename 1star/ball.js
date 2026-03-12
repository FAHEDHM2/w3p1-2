
 
class Ball {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx) {
        if (ctx && ctx.getContext) {
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (typeof ellipse === 'function') {
            
            ellipse(this.x, this.y, this.size * 2, this.size * 2);
        }
    }

    checkEdges(width, height) {
        if (this.x - this.size < 0 || this.x + this.size > width) this.speedX *= -1;
        if (this.y - this.size < 0 || this.y + this.size > height) this.speedY *= -1;
    }
}
