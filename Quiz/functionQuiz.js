// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  if (command === "add") {
    add(a, b);
  } else if (command === "substract") {
    substract(a, b);
  } else if (command === "divide") {
    divide(a, b);
  } else if (command === "multiply") {
    multiply(a, b);
  } else if (command === "remainder") {
    remainder(a, b);
  } else {
    console.log("error");
  }
}

function add(a, b) {
  console.log(a + b);
}
function substract(a, b) {
  console.log(a - b);
}
function divide(a, b) {
  console.log(a / b);
}
function multiply(a, b) {
  console.log(a * b);
}
function remainder(a, b) {
  console.log(a % b);
}

function calculate2(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate2("add", 1, 2));
console.log(calculate2("substract", 1, 2));
console.log(calculate2("divide", 1, 2));
console.log(calculate2("multiply", 1, 2));
console.log(calculate2("remainder", 1, 2));
console.log(calculate2("hi", 1, 2));
