let obj = {};

function strToKey(str) {

    if (obj.hasOwnProperty(str)) {
        obj[str] += 1;
        return obj;
    } else {
        obj[str] = 1;
        return obj;
    }

}

obj = strToKey('Jerry');
obj = strToKey('Elaine');
obj = strToKey('Elaine');
obj = strToKey('Jerry');
obj = strToKey('Kramer');
console.log(obj);

module.exports = strToKey;