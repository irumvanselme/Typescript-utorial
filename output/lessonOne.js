"use strict";
function getMagnitude(point) {
    return point.x * point.y;
}
var myPoint = {
    x: 10,
    y: 30,
    _x: 45,
};
console.log(getMagnitude(myPoint));
