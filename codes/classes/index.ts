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

class ITDepartment extends Department {
    private computers: string[] = [];

    addComputer(computer: string) {
        this.computers.push(computer);
    }

    getDetails() {
        console.log(this.computers);
    }
}

var myDepartment = new Department(1, "Humman Resource");

var kabezaDep = new ITDepartment(2, "Kabeza Department");
kabezaDep.addComputer("Comp 1");
kabezaDep.addComputer("Comp 2");
kabezaDep.addComputer("Comp 3");

kabezaDep.describe();
kabezaDep.getDetails();
