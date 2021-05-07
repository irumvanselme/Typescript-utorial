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
    describe() {
        console.log("Department id   : " + this.id);
        console.log("Department name : " + this.name);
    }
}
var myDepartment = new Department(1, "Humman Resource");
myDepartment.describe();
myDepartment.addEmployee("Kalisa");
myDepartment.addEmployee("Augustin");
myDepartment.addEmployee("Rugaba");
myDepartment.printEmployeesInformation();
