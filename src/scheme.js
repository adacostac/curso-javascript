function car(array) {
    return array[0];
}

function cdr(array) {
    return array.slice(1);
}

function hasElements(array) {
    if (array.length >= 1) { return true; }

    return false;
}

function log(array) {
    if (hasElements(array)) {
        console.log(car(array));
        log(cdr(array));
    }
}

function fact(n) {
    if (n < 2) { return 1; }
    return n * fact(n - 1);
}

console.log(fact(4));

module.exports = {
    car: car,
    cdr: cdr,
    hasElements: hasElements,
    log: log
}



