// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

//merges two objects and returns one object
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

//extends keyword dictates the constraint

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name: 'Amanda'}, {age: 30}));
const mergedObj = merge({name: 'Amanda', hobbies: ['Knitting']}, {age: 30});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['dog', 'cat']));

//The keyof operator takes an object type and produces a string or
//numeric literal union of its keys.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Amanda'}, 'name');

//Generic Classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Amanda');
textStorage.addItem('Tommy');
textStorage.removeItem('Amanda');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Amanda'});
// objStorage.addItem({name: 'Jake'});
//objStorage.removeItem({name: 'Jake'});
//console.log(objStorage.getItems());


//Utility Types - typescript only
//partial type
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date): CourseGoal {
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        return courseGoal as CourseGoal;
}

console.log(createCourseGoal('coach', 'football', new Date));


const names: Readonly<string[]> = ['Amanda', 'Tommy']
// names.push('Jake');
