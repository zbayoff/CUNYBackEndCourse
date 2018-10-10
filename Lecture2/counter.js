function sayHiFirst(callback){
    console.log('hi');
    callback();
}

function sayBye(){
    console.log('bye');

}

sayHiFirst(sayBye);

