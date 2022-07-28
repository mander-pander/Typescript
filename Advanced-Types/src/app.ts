type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//intersection can be used with any types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Amanda',
    privileges: ['create-server'],
    startDate: new Date()
}

//A type guard is some expression that performs a runtime check that guarantees the type in some scope.

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: Combinable, b: Combinable) {
    //this is a 'typeof' type guard
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}


const result = add('Amanda', 'Danielle');
console.log(result);

//optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'George',
    job: { title: 'CEO', description: 'My company'}
};

console.log(fetchedUserData?.job?.title);

//nullish coalescing
const userInput = null;

const storedData = userInput ?? 'default';

console.log(storedData);


type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

//discriminated union makes implementing type guards easier
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

//type casting

// const paragraph = document.getElementById('message-output');
//this is valid type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//this is better for react to not interfere with jsx syntax
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hey there!';
}

//index types
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital letter!'
}
