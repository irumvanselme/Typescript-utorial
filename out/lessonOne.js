"use strict";
function getMagnitude(point) {
    return point.x * point.y;
}
let myPoint = {
    x: 10,
    y: 30,
};
console.log(getMagnitude(myPoint));
