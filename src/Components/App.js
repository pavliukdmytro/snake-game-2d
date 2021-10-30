import Snake from "./Snake";
import Target from "./Target";
import Message from "./Message";

class App{
    constructor({ ctx, canvas }) {
        this.model = {
            step: 20,
            width: 16,
            height: 16,
            stop: true,
            error: false,
            start: false,
            speed: 300,
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
        });

        this.errorMessage = new Message({
            ctx,
            canvas,
            text: 'Game over',
            buttonText: 'try again',
            callBack: this.restart.bind(this),
        });

        this.startMessage = new Message({
            ctx,
            canvas,
            text: 'Snake',
            buttonText: 'Start',
            callBack: () => {
                this.model.start = true;
                this.model.stop = false;
            },
        });
    }

    restart() {
        this.target.restart();
        this.snake.restart();
        this.model.stop = false;
        this.model.error = false;
    }

    checkGameState() {
        if (!!this.snake.checkCrash()) {
            this.model.stop = true;
            this.model.error = true;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.target.draw();
        this.checkGameState();
    }

    core(oldDate) {
        requestAnimationFrame(() => {
            const date = Date.now();
            const { speed, error, stop } = this.model;

            /**
             * main flow
             * **/
            if (!this.model.start) {
                this.startMessage.show();
                this.core(date);
            } else if (error) {
                this.errorMessage.show();
                this.core(date);
            } else if (date - oldDate >= speed && !stop) {
                this.draw();
                this.core(date);
            } else {
                this.core(oldDate);
            }
        }, this.canvas);
    }

    start() {
        this.core(Date.now());
    }
}

export default App;