type MyType = {
    name: string;
    age: number;
    nick_name: string;
};

type cb = (a: number) => string;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

const number1: number = 5;
const number2: number = 2.8;

console.log(add(number1, number2));

const user: MyType = {
    name: "Anselme",
    age: 17,
    nick_name: "anselme23",
};

console.log(user.nick_name);

const favorites: string[] = ["name"];

enum roles {
    ADMIN = "ADMIN",
    SALES_MANAGER = "ADMIN",
    SHIPPER = "ADMIN",
}
