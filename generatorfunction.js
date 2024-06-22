function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}

const generator = simpleGenerator()

console.log(generator);
console.log(generator.next());
console.log(generator.next());

function* arrayGenerator(arr){
    for(let i=0;i<arr.length;i++){
        yield arr[i]
    }
}

const arrGenerator = arrayGenerator([1,7,4,6])
console.log(arrGenerator.next());
console.log(arrGenerator.next());