let userInput: unknown;
//unknown is more strict than any
let userName: string;

//type must be checked before performing any kind of operation with unknown
userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string') {
    userName = userInput;
}

//this function never produces a return value
//still defaults to void
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {}
}

generateError('An error occured!', 500);
