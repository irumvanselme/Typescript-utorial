const names: Array<string> = ["irumva", "habumugisha", "anselme"];

function addThem<T extends string | number>(a: T, b: T) {
    return a + " " + b;
}

console.log(addThem<number>(5, 2));
