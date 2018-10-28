function suma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        throw new Error('not number')

    return x + y;
}

module.exports = suma