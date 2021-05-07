interface MyPoint {
    x: number;
    y: number;
}

function getMagnitude(point: MyPoint): number {
    return point.x * point.y;
}

let myPoint: MyPoint = {
    x: 10,
    y: 30,
};

console.log(getMagnitude(myPoint));
