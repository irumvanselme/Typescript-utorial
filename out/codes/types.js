"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const number1 = 5;
const number2 = 2.8;
console.log(add(number1, number2));
const user = {
    name: "Anselme",
    age: 17,
    nick_name: "anselme23",
};
console.log(user.nick_name);
const favorites = ["name"];
var roles;
(function (roles) {
    roles["ADMIN"] = "ADMIN";
    roles["SALES_MANAGER"] = "ADMIN";
    roles["SHIPPER"] = "ADMIN";
})(roles || (roles = {}));
