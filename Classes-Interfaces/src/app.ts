// Class constructors start with uppercase
class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // this.id = 'd2';
        //readonly keeps this from being changed, extra type safety
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if (name === 'Amanda') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    printReports() {
      console.log(this.reports);
    }
  }

const security = new ITDepartment('d2', ['Amanda']);

security.describe();
console.log(security);

const accounting = new AccountingDepartment('d1', []);

accounting.addEmployee('Amanda');
accounting.addEmployee('Jacob');
accounting.addReport("Something isn't right.");

accounting.printReports();

// accounting.employees[2] = 'John';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'woah', describe: accounting.describe };

// accountingCopy.describe();
