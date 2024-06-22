//  ==> A regular function that takes three arguments and returns their sum can be written as:

function Sum(a, b, c) {
  return a + b + c;
}

console.log(Sum(1, 2, 3));

// ==>Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, where some arguments can be fixed or preset.

function A(a) {
  return function B(b) {
    return function C(c) {
      return a + b + c;
    };
  };
}

console.log(A(1)(5)(4)); // Output: 6


