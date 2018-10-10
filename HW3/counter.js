function makeStrToObj() {

    let obj = {};

    return function (str) {

        if (obj.hasOwnProperty(str)) {
            obj[str] += 1;
            return obj;
        } else {
            obj[str] = 1;
            return obj;
        }
    }

}


let newStrToObj = makeStrToObj();
newStrToObj('Kramer');
newStrToObj('Jerry');
newStrToObj('Jerry');
newStrToObj('Elaine');

console.log(newStrToObj('Elaine'));
newStrToObj('Elaine');
newStrToObj('Elaine');
console.log(newStrToObj('Newman'));

module.exports = makeStrToObj;