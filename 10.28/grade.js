const readlineSync = require("readline-sync");

const argv = process.argv.slice(2);
const inpGrade = readlineSync.questionInt("Give here a grade.: ");

const students = [
  { name: "Jane", age: 17, grade: 5 },
  { name: "Bill", age: 17, grade: 4 },
  { name: "Martha", age: 18, grade: 3 },
  { name: "Bob", age: 17, grade: 5 },
  { name: "John", age: 19, grade: 2 },
  { name: "Jane", age: 17, grade: 4 },
  { name: "Jill", age: 19, grade: 5 },
];
const printStudents = function (inpGrade) {
  console.log("Students who's grade is", inpGrade, "are: ");
  students.forEach((student) => {
    if (student.grade === inpGrade) {
      console.log(student.name);
    }
  });
};

printStudents(inpGrade);
