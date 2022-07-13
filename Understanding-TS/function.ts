function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

//to avoid type of "any", give type of function here
let combineValues: (a: number, b: number) => number;

combineValues = add;
//just giving function will cause snippet below to compile which returns undefined.
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
