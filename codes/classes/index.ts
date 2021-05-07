class Department {
    name: string;
    employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addEmployee(employee: string) {
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

var myDepartment = new Department("Humman Resource");
myDepartment.describe();

myDepartment.addEmployee("Kalisa");
myDepartment.addEmployee("Augustin");
myDepartment.addEmployee("Rugaba");

myDepartment.printEmployeesInformation();
