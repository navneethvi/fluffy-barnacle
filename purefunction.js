// ==> Pure function is a function that, given the same input, will always return the same output
// ==> Does not cause any observable side effects.
//    => Means does not alter any state or data outside the scope.

function add(a, b) {
    return a+b
}

console.log(add(2,3));


function toUpperCase(str){
    return str.toUpperCase();
}

const string = "navaneeth v"

console.log(toUpperCase(string));