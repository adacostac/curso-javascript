function isNumber(param) {
    if (typeof param === 'number') {
        return true
    } else {
        return false
    }
};

console.log(isNumber(5));