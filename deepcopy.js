const studentOne = {
    name: "Navaneeth V",
    age: 21,
    skills: {
      soft: "Quick Learning",
    },
  };
  
  const studentCopy = JSON.parse(JSON.stringify(studentOne))
  
  studentCopy.name = "Pegpilot";
  studentCopy.skills.soft = "Gaming";
  
  console.log("Main : ", studentOne);
  console.log("Copy : ", studentCopy);
  
  const marks = [1, 2, [30, 40], 5, 6];
  
  const marksCopy = JSON.parse(JSON.stringify(marks));
  
  marksCopy[2][1] = 400;
  
  console.log(marks);
  console.log(marksCopy);

//   -----------------------------------------------------------------

//  Using Lodash Library

  const _ = require("lodash")

  const originalArray = [1, 2, { a: 3 }];

  const deepCopy = _.cloneDeep(originalArray)

  deepCopy[2].a = 30

  console.log(originalArray);
  console.log(deepCopy);
  