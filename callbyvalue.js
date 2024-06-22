function Mutate(num) {
  num = 20;
  console.log(`The value inside function : ${num}`);
}

let a = 10;

Mutate(a);

console.log(`The value outside function : ${a}`);


