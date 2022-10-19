

function asserEror(message, given) {
    throw {
        name: "assertEror",
        message: `${message} given input ${given}`
    }
}

function isTrue(input, message) {
    if (input != true) {
        asserEror(message, input)
    }
}
function isEqual(input, expect, message) {

    if (input != expect) {
        asserEror(message, input);
    }

}

function baundaryCheck(actual, expected, message) {
    if (actual > expected) {
        asserEror(message, actual)
    }
}

function isEvenNumber(actual, message) {

    const number = actual;

    if (number % 2 == 0) {

    }
    else {
        throw {
            name: 'asserError',
            message: `${message} number of friends can not be ${actual}`
        }
    }

}



module.exports = {
    isTrue, isEqual, baundaryCheck, isEvenNumber
}