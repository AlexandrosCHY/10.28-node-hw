// const lecture = require("./lecture");

import { add, multiply, subtract, divide } from "./calculatorEMS.mjs";

// lecture.printProducts();

const argv = process.argv.slice(2);
const operation = argv[0];
const operand1 = Number(argv[1]);
const operand2 = Number(argv[2]);

let result;
let operationSign;

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

  if (operationSign != null && result != null) {
    console.log(`${operand1} ${operationSign} ${operand2} = ${result}`);
  }
}
