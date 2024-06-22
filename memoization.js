// ===> Memoization involves storing the results of expensive function calls and returning the cached result when the same input occur again.
// ===> This eliminates reduntant computations and significantly improves the operformance of the program

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function fibonacci(n, cache = {}) {
  if (n <= 1) return n;
  return fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
}

const memoizedFibonacci = memoize(fibonacci)

console.log(memoizedFibonacci(8));  
console.log(memoizedFibonacci(50));
