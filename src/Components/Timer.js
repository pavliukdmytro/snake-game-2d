class Timer{
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw(date) {
        const time = ((Date.now() - date) / 1000).toFixed(0);
        const seconds = time % 60;
        const minutes = Math.floor(time / 60);
        const timeString = `${ minutes } : ${ seconds < 10 ? '0' + seconds : seconds }`;

        this.ctx.fillStyle = 'grey';
        this.ctx.font = "20px serif";
        this.ctx.fillText(timeString, innerWidth - 50, 50);
    }
}

export default Timer;