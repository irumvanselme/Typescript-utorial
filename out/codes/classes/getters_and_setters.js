"use strict";
class Point3D {
    constructor(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
    }
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
    set z(z) {
        this._z = z;
    }
    get z() {
        return this._z;
    }
    static definition() {
        return "A point in 3D is a point that requires 3 components";
    }
}
const my3DPoint = new Point3D(1, 5, 6);
my3DPoint.x = 10;
console.log(Point3D.definition());
