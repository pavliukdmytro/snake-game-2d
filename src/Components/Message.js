class Message{
    constructor({ ctx, text, buttonText, canvas, callBack }) {
        this.model = {
            width: 300,
            height: 200,
            x: innerWidth / 2 - 150,
            y: innerHeight / 2 - 100,
            button: {
                x: innerWidth / 2 - 100,
                y: innerHeight / 2 + 40,
                width: 200,
                height: 40,
            }
        }
        this.text = text;
        this.buttonText = buttonText;
        this.isShow = false;
        this.ctx = ctx;
        this.canvas = canvas;
        this.callBack = callBack;
    }

    handlerClick = (e) => {
        const { clientX, clientY } = e;
        const {x ,y, width, height} = this.model.button;

        if ((clientX > x && clientX < x + width) && (clientY > y && clientY < y + height)) {
            this.isShow = false;
            this.destroy();
            this.callBack();
        }
    }

    createButton() {
        const {x, y, width, height} = this.model.button;

        /** button **/
        this.ctx.fillStyle = 'green';
        this.ctx.font = "20px serif";
        this.ctx.strokeRect(x, y, width, height);
        this.ctx.fillText(this.buttonText, innerWidth / 2, innerHeight / 2 + 65, 100);
    }

    createModal() {
        const { x, y, width, height } = this.model;
        this.ctx.fillStyle = 'white';
        this.ctx.strokeRect(x,y,width,height);
        this.ctx.fillRect(x,y,width,height);
        this.ctx.font = "30px serif";
        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.text, innerWidth / 2, innerHeight / 2, 300);
    }

    show() {
        if (!this.isShow) {
            /** main text **/
            this.isShow = true;

            this.createModal();
            this.createButton();
            this.init();
        }
    }

    init() {
        this.events();
    }

    destroy() {
        this.canvas.removeEventListener('click', this.handlerClick);
    }

    events() {
        this.canvas.addEventListener('click', this.handlerClick);
    }

}

export default Message;