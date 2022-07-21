// Class constructors start with uppercase
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.id = id
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Amanda');
accounting.addEmployee('Jacob');

// accounting.employees[2] = 'John';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'woah', describe: accounting.describe };

// accountingCopy.describe();
