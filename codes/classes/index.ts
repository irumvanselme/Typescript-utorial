class Department {
    private name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    printEmployeesInformation(): void {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    describe(): void {
        console.log("Department : " + this.name);
    }
}

var myDepartment = new Department("Humman Resource");
myDepartment.describe();

myDepartment.addEmployee("Kalisa");
myDepartment.addEmployee("Augustin");
myDepartment.addEmployee("Rugaba");

myDepartment.printEmployeesInformation();
