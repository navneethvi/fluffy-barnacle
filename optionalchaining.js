const obj = {
    name : "Navaneeth V",
    age : 21,
    marks : {
        physics : 88,
        maths : 79,
        chemistry : 77
    }
}


console.log(obj?.games?.cricket);
console.log(obj?.marks?.science);

/**
 * 
 * ===> The key difference between using the optional chaining operator ?. and not using it comes into play when a part of the path you are trying to access is null or undefined. 
 * ===> Optional chaining is a powerful feature in JavaScript that allows for safer and cleaner access to nested properties and methods.
 * 
 * 
 */