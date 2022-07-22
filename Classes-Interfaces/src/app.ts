// Class constructors start with uppercase
abstract class Department {
    static fiscalYear = 2022;
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id
        // this.name = n;
        //cannot access static fiscal year here, this refers to instances based on the class
        //static should be detached from instances
        // console.log(Department.fiscalYear);
        //that will work however
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;
    //all instances based on Department class must now include this abstract

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

    describe() {
        console.log('IT Department -ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            //getter method has to return something
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d1', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Amanda') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }

    printReports() {
      console.log(this.reports);
    }
  }

const employee1 = Department.createEmployee('Scott');
console.log(employee1, Department.fiscalYear);

const security = new ITDepartment('d2', ['Amanda']);

security.describe();
console.log(security);

// const accounting = new AccountingDepartment('d1', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
//creates the same object based off of the same instance
console.log(accounting, accounting2);

// console.log(accounting.mostRecentReport);
// no reports to show here

accounting.addEmployee('Amanda');
accounting.addEmployee('Jacob');

//access it like a property with '='
accounting.mostRecentReport = 'Valid value';
accounting.addReport("Something isn't right.");

//has reports to show
console.log(accounting.mostRecentReport);

accounting.printReports();

// accounting.employees[2] = 'John';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'woah', describe: accounting.describe };

// accountingCopy.describe();
