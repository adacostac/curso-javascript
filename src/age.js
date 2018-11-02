const AGE_MIN_ADULT = 18;

var getAgeType = function (age) {
    if (typeof age !== 'number')
        throw new Error('not number')

    if (isBoy(age)) {
        return ('boy')
    } else {
        return ('man')
    }
}

var isBoy = function (age) {
    if (age < AGE_MIN_ADULT) {
        return true
    } else {
        return false
    }
}

var isAdult = function (age) {
    return !isBoy(age);
}

module.exports = {
    getAgeType: getAgeType,
    isBoy: isBoy,
    isAdult: isAdult
}