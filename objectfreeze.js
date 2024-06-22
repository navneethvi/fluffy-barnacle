const student = {
    name : "Navaneeth V",
    age : 21
}

Object.freeze(student)

student.name = "Pegpilot"  // This will not change
student.gender = "male" // This will not add a new property

console.log(student);


/* 

==> Object.freeze() ===> makes an object immutable.
==> means we cannot add, delete and change properties of the object.

*/