interface Person {
    name: string;
    age: number;

    great(): string;
}

let userOne: Person;
userOne = {
    name: "IRUMVA",
    age: 23,
    great() {
        return "Hello " + this.name;
    },
};

console.log(userOne.great());
