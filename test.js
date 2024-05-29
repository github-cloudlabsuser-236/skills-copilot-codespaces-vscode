const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(number1, number2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            if(number2 != 0) {
                result = parseFloat(number1) / parseFloat(number2);
            } else {
                throw new Error('Error! Division by zero.');
            }
            break;
        default:
            throw new Error('Invalid operator!');
    }
    return result;
}

module.exports = calculate;