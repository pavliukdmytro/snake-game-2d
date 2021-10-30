class Pause{
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.events();
    }

    draw() {

    }

    handlerClick = (e) => {
        console.log(e.target);
    }

    events() {
        this.canvas.addEventListener('click', this.handlerClick);
    }

    destroy() {
        this.canvas.removeEventListener('click', this.handlerClick);
    }
}

export default Pause;