function makeHistorySaver(str, func) {

    let argies = [];

    return function (...args) {
        if (args[0] === str) {
            return argies;
        } else {
            argies.push(args[0]);
            return func(args[0]);
        }
    }
}

const multByThree = makeHistorySaver('Bosko', num => num * 3);

console.log(multByThree(4));
console.log(multByThree(6));
console.log(multByThree('Bosko'));
console.log(multByThree(8));
console.log(multByThree('Bosko'));