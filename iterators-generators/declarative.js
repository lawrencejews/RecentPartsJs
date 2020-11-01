var str = "Lawrence";
var it = str[Symbol.iterator]();

for (let v of it){
    console.log(v)
}

var str1 = "Lubuusi"
var it1 = str1[Symbol.iterator]();

for (let s of str1){
    console.log(s)
}

var str2 = "Lawrencejews";
var it2 = [...str2];
it2;
