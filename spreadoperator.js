// ===> Function Calls

function Sample(a, b, c, d) {
  console.log(a, b, c, d);
}

const args = [1,2,3,4]

Sample(...args)


// ===> Array Literals


const arr1 = [1,2,3]
const arr2 = [4,5,6]

const mainArr = [...arr1, ...arr2]

console.log(mainArr);


// ===> Object Literals


const obj1 = {a : 1, b : 2}
const obj2 = {c : 3, d : 4}

const mainObj = {...obj1, ...obj2}

console.log(mainObj);