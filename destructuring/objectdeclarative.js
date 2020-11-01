function data() {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }
}

var {
    a: first,
    b: second,
    ...third
} = data() || {};
