import Snake from "./Snake";
import Target from "./Target";
import Message from "./Message";
import Counter from "./Counter";
import Timer from "./Timer";

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
            acceleration: 1,
            timeStart: null,
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

        this.counter = new Counter(ctx);

        this.timer = new Timer(ctx);

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
        this.model.timeStart = new Date();
    }

    checkCatchTarget() {
        const { head } = this.snake;
        const { model } = this.target;
        if (head.x === model.x && head.y === model.y) {
            this.snake.increase(model.color);
            this.target.remove();
        }
    }

    checkGameState() {
        if (!!this.snake.checkCrash()) {
            this.model.stop = true;
            this.model.error = true;
        }

        this.checkCatchTarget();
    }

    draw() {
        if (!this.model.timeStart) this.model.timeStart = new Date();

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.target.draw();
        this.counter.draw();
        this.timer.draw(this.model.timeStart);
        this.checkGameState();
    }

    core(oldDate) {
        requestAnimationFrame(() => {
            const date = Date.now();
            const {
                speed,
                error,
                stop,
                acceleration
            } = this.model;

            /**
             * main flow
             * **/
            if (!this.model.start) {
                this.startMessage.show();
                this.core(date);
            } else if (error) {
                this.errorMessage.show();
                this.core(date);
            } else if (date - oldDate >= speed / acceleration && !stop) {
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