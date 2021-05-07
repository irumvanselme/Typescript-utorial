class Department {
    protected employees: string[] = [];

    constructor(protected readonly id: number, protected name: string) {}

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

    constructor(id: number, private location: string) {
        super(id, "IT Department");
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

var myDepartment = new Department(1, "Humman Resource");

var kabezaDep = new ITDepartment(2, "Kabeza");

// kabezaDep.addEmployee("Mugabo");

// kabezaDep.addComputer("Comp 1");
// kabezaDep.addComputer("Comp 2");
// kabezaDep.addComputer("Comp 3");

// kabezaDep.describe();
// kabezaDep.printEmployeesInformation();
// kabezaDep.getDetails();

class Point3D {
    constructor(private _x: number, private _y: number, private _z: number) {}

    set x(x: number) {
        this._x = x;
    }

    get x() {
        return this._x;
    }

    set y(y: number) {
        this._y = y;
    }

    get y() {
        return this._y;
    }

    set z(z: number) {
        this._z = z;
    }

    get z() {
        return this._z;
    }
}

const my3DPoint = new Point3D(1, 5, 6);
my3DPoint.x = 10;
console.log(my3DPoint.x);
