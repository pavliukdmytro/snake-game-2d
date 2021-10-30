import Snake from "./Snake";
import Target from "./Target";

class App{
    constructor({ ctx, canvas }) {
        this.model = {
            step: 20,
            width: 16,
            height: 16,
            loose: false,
        }
        this.ctx = ctx;
        this.canvas = canvas;

        this.snake = new Snake({
            ctx,
            width: this.model.width,
            height: this.model.height,
            step: this.model.step
        });
        this.target = new Target({
            ctx,
            width: this.model.width,
            height: this.model.height,
            step: this.model.step,
        })
    }


    draw(oldDate) {
        requestAnimationFrame(() => {
            const date = Date.now()
            if (date - oldDate >= 300) {
                this.draw(date);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.snake.draw();
                this.target.draw();
            } else {
                this.draw(oldDate);
            }
        }, this.canvas);
    }

    start() {
        this.draw(Date.now());
    }
}

export default App;