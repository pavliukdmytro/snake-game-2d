import randomColor from "../methods/randomColor";

class Rectangle {
    constructor(x, y, width, height, color = randomColor()) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = x;

        this.width = width;
        this.height = height;
        this.color = color;
    }
}

export default Rectangle;