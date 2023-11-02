const readlineSync = require("readline-sync");

const argv = process.argv.slice(2);
const inpGrade = readlineSync.questionInt("Enter here a grade.: ");
const inpAge = readlineSync.questionInt("Enter here an age.: ");

const students = [
  { name: "Jane", age: 17, grade: 5 },
  { name: "Bill", age: 17, grade: 4 },
  { name: "Martha", age: 18, grade: 3 },
  { name: "Bob", age: 17, grade: 5 },
  { name: "John", age: 19, grade: 2 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Jill", age: 19, grade: 5 },
];
const worstThanInpGrade = function (inpAge, inpGrade) {
  let counter = 0;
  students.forEach((student) => {
    if (inpAge > student.age && student.grade < inpGrade) {
      counter += 1;
    }
  });
  console.log(
    "There are ",
    counter,
    "students who are younger than ",
    inpAge,
    " whit a grade worse than ",
    inpGrade
  );
};
worstThanInpGrade(inpAge, inpGrade);
