import randomColor from "../methods/randomColor";

class Target {
    constructor({ ctx, width, height, step, canvas }) {
        this.model = {
            width,
            height,
            step,
            canvas,
            color: '',
            x: null,
            y: null,
        }
        this.ctx = ctx;
    }

    randomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    restart() {
        this.model.y = null;
        this.model.x = null;
    }


    remove() {
        this.model.x = null;
        this.model.y = null;
    }

    draw() {
        const { x, y, width, height, step, canvas } = this.model;

        if (x === null && y === null) {

            let newX = this.randomNumber(canvas.width - width);
            let newY = this.randomNumber(canvas.height - height);

            newX = newX - (newX % step);
            newY = newY - (newY % step);

            this.model.x = newX;
            this.model.y = newY;
            this.model.color = randomColor();
        }
        this.ctx.fillStyle = this.model.color;
        this.ctx.fillRect(this.model.x, this.model.y, width, height);
    }
}

export default Target;