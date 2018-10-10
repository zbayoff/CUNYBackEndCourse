function makeHistorySaver (str, func) {


    return function (){

    }
}

const multByThree = makeHistorySaver('Bosko', num => num * 3);

console.log(multByThree(4));