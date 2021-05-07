"use strict";
let userOne;
userOne = {
    name: "IRUMVA",
    age: 23,
    great() {
        return "Hello " + this.name;
    },
};
console.log(userOne.great());
