// ==> Explicit

let str = "12345"
let num = Number(str)
console.log(num, " ", typeof(num));


let bool = true
let string = String(bool)
console.log(string, " ", typeof(string));


// ==> Implicit

let number = 12345
let greet = "This is " + number
console.log(greet, " ", typeof greet);