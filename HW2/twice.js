function doTwice(func) {

    return func;

}

function add(x, y) {
    return x + y;
}

const val = doTwice(add(5, 6));

console.log(val);