var obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function () {
        var keys = Object.keys(this);
        var index = 0;
        return {
            next: () =>
                (index < keys.length) ? {
                    done: false, value: this[keys[index++]]
                } :{
                    done : true, value : undefined
                }
        }
    }
};
[...obj];