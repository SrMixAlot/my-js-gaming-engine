class GameObject {

    /*
     * GameObject constructor
     */
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    /*
     * Draws this game object onto the canvas
     */
    draw(context, color) {
        if(!color)
            color = "red";

        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
