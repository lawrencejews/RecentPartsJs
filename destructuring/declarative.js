function data() {
    return [1, , 3, 4, 5];
}

var [
    first,
    second = 10,
    third,
    ...fourth
] = data() || [];