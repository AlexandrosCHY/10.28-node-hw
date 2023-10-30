// const lecture = require("./lecture");

const { add, multiply, subtract, divide } = require("./calculator");
const readlineSync = require("readline-sync");
// lecture.printProducts();

// const answer = readlineSync.question("tetszik a node?");
// const asd = readlineSync.questionInt();
// console.log(answer);
// console.log(asd);
// const argv = process.argv.slice(2);
let result;
let operationSign;
while (true) {
  const operation = readlineSync.question(
    "Adj meg egy muveletet (add/subtarct/multiply/divide) ha ki akarsz lepni ird: (exit)   "
  );
  if (operation === "exit") {
    break;
  }
  const operand2 = readlineSync.questionInt();
  const operand1 = readlineSync.questionInt();
  if (isNaN(operand1) || isNaN(operand2)) {
    console.log("Wrong parameters, try again");
  } else {
    switch (operation) {
      case "add": {
        operationSign = "+";
        result = add(operand1, operand2);
        break;
      }
      case "multiply": {
        operationSign = "*";
        result = multiply(operand1, operand2);
        break;
      }
      case "divide": {
        operationSign = "/";
        result = divide(operand1, operand2);
        break;
      }
      case "subtract": {
        operationSign = "-";
        result = subtract(operand1, operand2);
        break;
      }
      default: {
        console.log("Operation not permitted");
      }
    }
  }

  if (operationSign != null && result != null) {
    console.log(`${operand1} ${operationSign} ${operand2} = ${result}`);
  }
}
