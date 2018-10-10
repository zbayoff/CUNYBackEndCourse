const greet = require('./greet');
const calc = require('./calc');

// console.log(greet('Zach'));

const name = process.argv.slice(2, 3).join();
const operator = process.argv.slice(3, 4).join();

const firstNum = process.argv.slice(4, 5).join();
const secondNum = process.argv.slice(5, 6).join();

const finalAnswer = greet(name) + ' ' + calc(operator, firstNum, secondNum);

console.log(finalAnswer);