import bigDecimal from 'js-big-decimal';

// Input: 9*3+5/100
// Input: -9*-3+5/100

// const bigDecimal = require('js-big-decimal')

export default function calculate(truncEntry) {
    // function calculate(truncEntry) {
    // truncEntry = truncEntry.replaceAll(/(?<=\d)[\+\-\*\/\%]/g, " $& ")
    let truncArray = truncEntry.split(' ')

    let fixedTruncArray = truncArray.map(n => !Number(n) ? n : Number(n))

    let indexOfOperand;

    while (true) {
        if ((indexOfOperand = fixedTruncArray.indexOf('/')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                bigDecimal.divide(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1], 3)
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('*')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                bigDecimal.multiply(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('+')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                bigDecimal.add(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('-')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                bigDecimal.subtract(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else { break }
    }

    return fixedTruncArray[0]
}

// calculate('9*3+5/100')
// calculate('-9*+3+5/100')
calculate('-9.25*+3.983+5.23/100.23')
