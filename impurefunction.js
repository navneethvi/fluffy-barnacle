let counter = 0

function increment() {
    counter++
    return counter
}

console.log(increment());
console.log(increment());


//  ===> Here increment is an impure function because it alter the external counter variable and its output depends on the state of the counter,    