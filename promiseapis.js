const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "bar");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 50, "Error");
});

/* 

==> Promise.all()

=> Usually takes an array of promises and returns a single promise that resolves when all of the promise gets resolved.
=> If any promise rejects, the returned promise rejects with the reason of the first promise that rejects. 

*/

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log("Promise.all() ===>", values))
  .catch((error) => console.log("Promise.all() ===>", error));

/*

==> Promise.any()

=> It also takes an array of promises and returns a single promise as soon as any of the promise gets resolved.
=> If no promise resolved and all promise reject, it returns a promise that rejects with an "Aggregate Error" (Multiple errors).

*/

Promise.any([promise1, promise2, promise3])
  .then((values) => console.log("Promise.any() ===>", values))
  .catch((error) => console.log("Promise.any() ===>", error));

/*

==> Promise.race()

=> It also takes an array of promises and return a single promise that resolves of reject as soon as any of the promise resolves or rejected.

*/

Promise.race([promise1, promise2, promise3])
  .then((values) => console.log("Promise.race() ===>", values))
  .catch((error) => console.log("Promise.race() ===>", error));

/* 

==> Promise.allSettled()

=> It also takes an array of promises and return a single promise that resolves when all of the promise gets settled (either resolved or rejected).
=> It returns an array of objects that each describe the outcome of each promise.

*/

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => console.log("Promise.allSettled() ===>", values))
  .catch((error) => console.log("Promise.allSettled() ===>", error));
