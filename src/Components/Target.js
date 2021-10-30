import randomColor from "../methods/randomColor";

class Target {
    constructor({ ctx, width, height, step }) {
        this.model = {
            width,
            height,
            step,
            x: null,
            y: null,
            color: randomColor(),
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
        const { x, y, width, height, step } = this.model;

        if (x === null && y === null) {
            let newX = this.randomNumber(innerWidth - width);
            let newY = this.randomNumber(innerHeight - height);

            newX = newX - (newX % step);
            newY = newY - (newY % step);

            this.model.x = newX;
            this.model.y = newY;
        }
        this.ctx.fillStyle = this.model.color;
        // console.log(this.model.color);
        this.ctx.fillRect(this.model.x, this.model.y, width, height);
    }
}

export default Target;