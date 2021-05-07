interface Point {
    x: number;
    y: number;
}

function getMagnitude(point: Point): number {
    return point.x * point.y;
}

let myPoint: Point = {
    x: 10,
    y: 30,
    _x: 45,
};

console.log(getMagnitude(myPoint));
