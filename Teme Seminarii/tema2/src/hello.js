// arrow function example
// let sayHello = (name) => `Hello, ${name}!`;

// console.log(sayHello(process.argv[2]));

// arrow function concatenation example
let concatenateFunction = (arr) => arr.join('');

console.log(concatenateFunction(['Hello', 'World!']));

//example from terminal

let words = process.argv.slice(2);

console.log(concatenateFunction(words))