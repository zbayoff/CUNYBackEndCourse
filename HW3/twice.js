function doTwice(func) {

    return func(func(10));
}

function add5(x) {
    return x + 5;
}

let twoHeys = doTwice(add5);
console.log(twoHeys);


module.exports = doTwice;