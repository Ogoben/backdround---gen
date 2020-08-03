//#1 Create a one line function that adds adds two parameters

const add = (a = 5, b = 8) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y;
let addToTen = addTo(10);
addToTen(3);

//Currying: What does the last line return?

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); // answer 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); //answer 16