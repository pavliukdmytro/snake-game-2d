import randomColor from "../methods/randomColor";

class Rectangle {
    constructor(x, y, width, height, direction = 'right') {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = x;

        this.width = width;
        this.height = height;
        this.direction = direction;
        this.color = randomColor();
    }
}

export default Rectangle;