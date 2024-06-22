const numbers = [1,2,3,4,5]

let double = numbers.map((num)=> [num, num*2])

console.log(double);

let flat = double.flat()

console.log(flat);

let flatmap = numbers.flatMap(num => [num, num * 2])

console.log(flatmap);