"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log("Department : " + this.name);
    }
}
var myDepartment = new Department("Humman Resources");
myDepartment.describe();
myDepartment.addEmployee("Kalisa");
myDepartment.addEmployee("Augustin");
myDepartment.addEmployee("Rugaba");
myDepartment.printEmployeesInformation();
