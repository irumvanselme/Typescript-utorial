class Point {
    constructor(public _x: number, private _y?: number) {}

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }
}

let point = new Point(10);
point.x = 10;

console.log(point.x);
