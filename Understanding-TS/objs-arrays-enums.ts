// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Amanda',
    age: 30,
    hobbies: ['Hiking', 'Knitting'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Hiking'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map()); !hobby is a string! shows error
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}
