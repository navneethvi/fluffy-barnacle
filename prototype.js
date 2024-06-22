const obj = {a : 10}

console.log(obj.toString());  // toString is not defined but on its prototype.

/**
 * 
 * ===> The prototype itself is an object, and it can have its own prototype, leading to a chain of prototypes. 
 *
 * ===> This is known as prototype chaining. The chain ends when a prototype is null.
 **/


// Custom Prototype

const proto = {b : 20}

const myObj = Object.create(proto)

myObj.a = 10

console.log(myObj.a);
console.log(myObj.b); // Inherited from proto


// ===> "prototype" is a property on functions that are intended to be used as constructors.
// ===> "__proto__" is a property on objects that points to their prototype.
