let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}


//noEmitOnError being true prevents errors from being compiled

//strictNullChecks checks for null, if you don't know if something exists,
//an option is to wrap it in an if check

//strictBindCallApply checks whether what your binding makes sense
