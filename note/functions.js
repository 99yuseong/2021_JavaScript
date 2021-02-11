// Function
// - fundamental building block in the program
// (작은 기능을 하는 함수 하나하나가 모여 프로그램을 만듬)
// - subprogram can be used multiple times
// (한번 만들면 여러번 사용할 수 있음)
// - performs a task or calculates a value
// (한 번에 한 가지 일이나 계산만 하게 만들어야 함)

// 1. function declaration
// function name (param1, param2){
//    body
//    return;
// }
// one function === one thing (한 함수는 한가지일만)
// naming : dosomething, command, verb (동사형으로 이름 지을 것)
// e.g. createCardandPoint > CreateCard, CreatePoint 너무 많은 일이 들어가있지 않은 지 고려
// function is object in JS, 변수의 값으로 할당, 리턴 가능 , 함수의 인자로 전달 가능 등등
function printHello() {
  console.log("hello");
}
printHello();

// 2. Parameters
// premitive parameters : passed by value (값을 전달)
// object parameters : passed by reference (참조를 전달)
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // {name : "coder"}

// 3. default parameters (added in ES6)
// 사용자가 parameter을 주지 않았을 때 미리 설정해둔 default 값을 인자로 사용
function showMessage1(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}
// or
function showMessage2(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage1("hi!");
showMessage2("hi!");

// 4. Rest parameters (added in ES6)
// Rest 파라미터 구문은 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게 합니다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // or
  for (const arg of args) {
    console.log(arg);
  }
  // or
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; //global varialbe 전역변수
function printMessage() {
  let message = "hello"; // local variable 지역 변수
  console.log(message); // hello
  console.log(globalMessage); //global
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}

// 6. return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. early return, early exit
// bad
function upgraderUser(user) {
  if (user.point > 0) {
    // long upgrade logic
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable (변수에 할당)
// can be passed as an argument to other functions. (함수의 파라미터로 전달)
// can be returned by another function (리턴 값으로도 리턴이 된다)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// (함수 선언의 경우 hoisting돼서 선언하기 전에도 호출이 가능)
// a function expression is created when the execution reaches it.
// (함수 표현식의 경우 선언된 이후에만 호출이 가능. )
// e.g. function expression
const print = function () {
  console.log("print");
};
// 함수를 선언함과 동시에 변수에 할당
// 함수의 이름 생략 가능(필요한 부분만 작성해서 할당 가능) anonymous function
// 이름이 있는 함수는 named function
// function declaration(함수 선언)과 달리 hoisting 되지 않음
print(); // print 함수 호출
const printAgain = print; // 다른 변수에 함수 할당
printAgain(); // print 함수 호출
const sumAgain = sum; // 다른 변수에 함수 할당
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 콜백 함수란
// 1. 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수
// 2. 어떤 이벤트에 의해 호출되어지는 함수
function randomQuiz(answer, pringYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};
// named function
// better debugging in debugger's stack traces
// recursions > 함수 안에서 자기자신을 호출하는 것
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous (항상 이름이 없는 함수)
const simplePrinr = function () {
  console.log("simplePrint!");
}; // function expression을 쓰게되면 이거저거 써야되는 게 많음
// 그래서 간편하게 return까지 깔끔하게
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // 한줄이 아니라 더 많은 내용을 적으려면 중괄호 이용
  // return을 써서 값을 리턴시켜 줘야함
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 호출하려면 함수를 ()로 묶고 뒤에 ()를 붙이면
// 선언함과 동시에 호출 가능
(function hello() {
  console.log("IIFE");
})();
