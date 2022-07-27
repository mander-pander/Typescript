// type AddFn = (a: number, b:number) => number;
//interfaces as Function Types
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2:number) => {
    return n1 + n2;
};

//interface and type are exactly the same
//interfaces can only be used to describe the
// structure of an object and is clearer than using type
interface Named {
    readonly name?: string;
    outputName?: string;
}
//unlike classes, you can inhereit from multiple interfaces
interface Greetable extends Named {
    greet(phrase: string): void;
}

//interface is useful when you want to make sure a class has a certain method
//forces the existance of the method

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' '  + this.name);
        } else {
            console.log('Hi there!');
        }
    }
}

//interfaces are used to define objects
//can use interface as a type - see below
let user1: Greetable;

user1 = new Person();
//since name is read only in Greetable, Person implementing Greetable recognizes that name is readonly
// user1.name = 'Not Amanda';

user1.greet('Hey, I am');
console.log(user1);
