function data() {
    return [1, , 3, 4, 5];
}

var tmp = data() || [];
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);