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

// =============================================================================================

// Impure func
function addElementToArray(arr, element) {
    arr.push(element); 
}

const numbers = [1, 2, 3];
addElementToArray(numbers, 4);

console.log("impure",numbers); 

// Pure func
function addElementToArrayPure(arr, element){
    return [...arr, element]
}

const numbers2 = [1, 2, 3];
const newNumbers = addElementToArrayPure(numbers2, 4);
console.log(numbers2);
console.log(newNumbers);