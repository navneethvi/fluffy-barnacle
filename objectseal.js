const student = {
  name: "Navaneeth V",
  age: 21,
};

Object.seal(student);

delete student.age; // This will not delete the property
student.name = "Pegpilot"; // This will change the value
student.gender = "Male"; // This will not add a new property

console.log(student);

/**
 
===> Object.seal() ==> makes an object non=extensible and marks all existing properties as non-configurable.
==> It doesnot prevent changes to the values of existing properties

 **/
