module.exports = function calc(operator, firstNum, secondNum) {

    switch (operator) {
        case 'add':
        return Number(firstNum) + Number(secondNum);
        case 'subtract':
        return Number(firstNum) - Number(secondNum);
        case 'multiply':
        return Number(firstNum) * Number(secondNum);
        case 'divide':
        return Number(firstNum) / Number(secondNum);
        default:
            break;
    }

    // if (operator === 'add') {
    //     return Number(firstNum) + Number(secondNum);
    // } else if (operator === 'subtract') {
    //     return Number(firstNum) - Number(secondNum);
    // } else if (operator === 'multiply') {
    //     return Number(firstNum) * Number(secondNum);
    // } else if (operator === 'divide') {
    //     return Number(firstNum) / Number(secondNum);
    // }

}