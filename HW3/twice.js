function doTwice(func) {

    return func(func(10));
}

function add5(x) {
    return x + 5;
}

let twoFives = doTwice(add5);
console.log(twoFives);


module.exports = doTwice;