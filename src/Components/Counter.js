class Counter{
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.font = "20px serif";
        this.ctx.fillText(window.app.snake.model.count - 2, 50, 50, );
    }
}

export default Counter;