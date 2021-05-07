"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, location) {
        super(id, "IT Department");
        this.location = location;
        this.computers = [];
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new ITDepartment(10, "Mukamira");
        return this.instance;
    }
    addComputer(computer) {
        this.computers.push(computer);
    }
    getDetails() {
        console.log(this.computers);
    }
    describe() {
        console.log("Department id   : " + this.id);
        console.log("Department name : " + this.name);
        console.log("Department location : " + this.location);
    }
}
var kabezaDep = ITDepartment.getInstance();
kabezaDep.addEmployee("Mugabo");
kabezaDep.addComputer("Comp 1");
kabezaDep.addComputer("Comp 2");
kabezaDep.addComputer("Comp 3");
kabezaDep.describe();
kabezaDep.printEmployeesInformation();
kabezaDep.getDetails();
