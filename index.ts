class Point {
    constructor(public _x: number, public _y: number) {}

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }
}

let point = new Point(10, 30);
point.x = 10;
point.y = 23;

console.log(point.x);
console.log(point.y);
