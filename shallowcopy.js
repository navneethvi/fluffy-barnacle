const studentOne = {
  name: "Navaneeth V",
  age: 21,
  skills: {
    soft: "Quick Learning",
  },
};

const studentCopy = { ...studentOne };

studentCopy.name = "Pegpilot";
studentCopy.skills.soft = "Gaming";

console.log("Main : ", studentOne);
console.log("Copy : ", studentCopy);

const marks = [1, 2, [30, 40], 5, 6];

const marksCopy = [...marks];

marksCopy[2][1] = 400;

console.log(marks);
console.log(marksCopy);
