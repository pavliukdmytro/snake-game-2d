class Controls{
    constructor(ctx, callback) {
        this.ctx = ctx;
        this.callback = callback;
        this.model = {
            top: {
                x: innerWidth - 80,
                y: innerHeight - 160,
                width: 40,
                height: 40,
            },
            bottom: {
                x: innerWidth - 80,
                y: innerHeight - 40,
                width: 40,
                height: 40,
            },
            left: {
                x: innerWidth - 120,
                y: innerHeight - 100,
                width: 40,
                height: 40,
            },
            right: {
                x: innerWidth - 40,
                y: innerHeight - 100,
                width: 40,
                height: 40,
            },
        }

        this.events();
    }

    events() {
        document.addEventListener('touchstart', (e) => {
            const { top, bottom, left, right } = this.model;
            const { clientX, clientY } = e.targetTouches[0];

            if (
                top.x < clientX &&
                top.x + top.width > clientX &&
                top.y < clientY &&
                top.y + top.height > clientY
            ) {
                this.callback('top');
            } else if (
                bottom.x < clientX &&
                bottom.x + bottom.width > clientX &&
                bottom.y < clientY &&
                bottom.y + bottom.height > clientY
            ) {
                this.callback('down');
            } else if (
                left.x < clientX &&
                left.x + left.width > clientX &&
                left.y < clientY &&
                left.y + left.height > clientY
            ) {
                this.callback('left');
            } else if (
                right.x < clientX &&
                right.x + right.width > clientX &&
                right.y < clientY &&
                right.y + right.height > clientY
            ) {
                this.callback('right');
            }
        })
    }

    draw() {
        const { top, bottom, left, right } = this.model;

        this.ctx.strokeRect(top.x, top.y, top.width, top.height);
        this.ctx.strokeRect(bottom.x, bottom.y, bottom.width, bottom.height);
        this.ctx.strokeRect(left.x, left.y, left.width, left.height);
        this.ctx.strokeRect(right.x, right.y, right.width, right.height);
    }
}

export default Controls;