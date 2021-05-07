abstract class Department {
    protected employees: string[] = [];

    constructor(protected readonly id: number, protected name: string) {}

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    printEmployeesInformation(): void {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    abstract describe(): void;
}

class ITDepartment extends Department {
    private computers: string[] = [];
    private static instance: ITDepartment;

    private constructor(id: number, private location: string) {
        super(id, "IT Department");
    }

    static getInstance() {
        if (this.instance) return this.instance;
        this.instance = new ITDepartment(10, "Mukamira");
        return this.instance;
    }

    addComputer(computer: string) {
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
