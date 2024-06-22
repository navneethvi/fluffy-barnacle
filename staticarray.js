// ==> A static array is an array with a fixed size that doesn't change after it's created.

//  ==> Create static array using Array Constructor and Object.freeze()

const staticArray = new Array(5).fill(null)

console.log(staticArray);

staticArray[0] = 1;
staticArray[1] = 2;
staticArray[2] = 3;
staticArray[3] = 4;
staticArray[4] = 5;

console.log(staticArray);

// Prevent any modifications to the array
Object.freeze(staticArray);

staticArray.push(5) //Will not work
staticArray.pop() //Will not work
staticArray[0] = 10 //This will work, because Object.freeze only prevents structure changes

console.log(staticArray);