import calculator from "./calculator.js";
import readlineSync from "readline-sync";
const { add, subtract, multiply, divide } = calculator;

const answer = readlineSync.question("What should we calculate? ");

const userCommand = answer.split(" ");
const operation = userCommand[0];
const operand1 = Number(userCommand[1]);
const operand2 = Number(userCommand[2]);

let result;
let operationSign;

if (isNaN(operand1) || isNaN(operand2)) {
  console.error("Wrong parameters, try again");
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

  if (operationSign != null && result != null) {
    console.log(`${operand1} ${operationSign} ${operand2} = ${result}`);
  }
}
