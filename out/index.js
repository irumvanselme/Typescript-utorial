"use strict";
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
}
let point = new Point(10, 30);
point.x = 10;
point.y = 23;
console.log(point.x);
console.log(point.y);
