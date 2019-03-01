const objectHTML = {
    type: 'ul',
    value: [
        { type: 'li', value: 'bar' },
        { type: 'li', value: 'foo' },
        { type: 'ol', value: 'qux' }
    ]
}

function createElementUl(object) {
    var html = '';
    if (isString(object.value)) {
        html = createElementLi(object);
    } else {

        html = '<' + object.type + '>' + pintaNodo(object.value) + '</' + object.type + '>';
    }

    return html;
}

function createElementLi(object) {
    return '<' + object.type + '>' + object.value + '</' + object.type + '>';
}

function pintaNodo(array) {
    var elementHTML = '';

    array.forEach(item => {
        elementHTML = elementHTML + createElementLi(item);
    });

    return elementHTML;
}

function isString(arg) {
    return (typeof arg === 'string');
}

console.log(createElementUl(objectHTML));

