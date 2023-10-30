export const add = function (num1, num2) {
  return num1 + num2;
};

export const subtract = function (num1, num2) {
  return num1 - num2;
};

export const multiply = function (num1, num2) {
  return num1 * num2;
};

export const divide = function (num1, num2) {
  return num1 / num2;
};

// function calculator(operator, num1, num2) {
//   if (operator === "add") {
//     return add(num1, num2);
//   } else if (operator === "subtract") {
//     return subtract(num1, num2);
//   } else if (operator === "multiply") {
//     return multiply(num1, num2);
//   } else if (operator === "divide") {
//     return divide(num1, num2);
//   } else {
//     return "Invalid task";
//   }
// }

// console.log(
//   calculator(process.argv[2], Number(process.argv[3]), Number(process.argv[4]))
// );

// module.exports.additional = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;
