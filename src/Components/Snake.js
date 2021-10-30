import Rectangle from './Rectangle';

class Snake {
    constructor({ ctx, step, width, height }) {
        this.ctx = ctx;
        this.model = {
            width,
            height,
            step,
            x: 0,
            y: Math.floor((innerHeight / 2) - 14),
            items: [],
            count: 2,
            direction: 'right',
        }

        this.events();
    }

    fillItemsArray() {
        /** Fill Items **/
        const { items, count, x, y, width, height, step } = this.model;

        for (let i = 0; i < count; i++) {
            if (i === 0) {
                items.push(new Rectangle((count - 1) * step, y, width, height));
            } else {
                const prevX = items[ i - 1 ]?.x;
                items.push(new Rectangle(prevX - step, y, width, height));
            }
        }
    }

    moveItems(el, i) {
        const { items, step, direction, width } = this.model;
        let prev  = items[ i - 1 ];

        el.oldX = el.x;
        el.oldY = el.y;

        if (i === 0) {
            switch (direction) {
                case 'right' : {
                    const newVal = step + el.x;
                    if (newVal > innerWidth) {
                        el.x = 0;
                    } else {
                        el.x = newVal;
                    }

                    break;
                }
                case 'left' : {
                    const newVal = el.x - step;
                    if (newVal < 0) {
                        el.x = innerWidth - (innerWidth % step);
                    } else {
                        el.x = newVal;
                    }

                    break;
                }
                case 'top' : {
                    const newVal = el.y - step;
                     if (newVal < 0) {
                         el.y = (innerHeight - step) - (innerHeight - step) % step;
                     } else {
                         el.y = newVal;
                     }

                    break;
                }
                case 'down' : {
                    const newVal = el.y + step;

                    if (newVal > innerHeight) {
                        el.y = 0;
                    } else {
                        el.y = newVal;
                    }

                    break;
                }
            }
        } else {
            el.x = prev.oldX;
            el.y = prev.oldY;
        }
    }

    events() {
        document.addEventListener('keydown', ({ code }) => {
            const { direction }  = this.model;

            if (code === 'ArrowUp' && direction !== 'down') {
                this.model.direction = 'top';
            } else if (code === 'ArrowDown' && direction !== 'top') {
                this.model.direction = 'down';
            } else if (code === 'ArrowRight' && direction !== 'left') {
                this.model.direction = 'right';
            } else if (code === 'ArrowLeft' && direction !== 'right') {
                this.model.direction = 'left';
            }
        })
    }


    draw() {
        /** fill array Items **/
        const { items } = this.model;
        if (!items.length) {
            this.fillItemsArray();
        };

        items.map((el, i) => {
            this.ctx.fillStyle = el.color;
            this.moveItems(el, i);
            this.ctx.fillRect(el.x, el.y, el.width, el.height);
        });


    }
}

export default Snake;