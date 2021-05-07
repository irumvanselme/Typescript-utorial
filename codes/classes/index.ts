class Department {
    private employees: string[] = [];

    constructor(private readonly id: number, private name: string) {}

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    printEmployeesInformation(): void {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    describe(): void {
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
