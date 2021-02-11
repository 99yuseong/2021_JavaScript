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
let globalMessage = 'global'; //global varialbe 전역변수
function printMessage(){
  let message = 'hello'; // local variable 지역 변수
  console.log(message); // hello
  console.log(globalMessage); //global
    fuction printAnother(){
      console.log(message);
      let childMessage = 'hello';
    }
}

// 6. return a value
function sum(a, b){
  return a + b;
}
const result = sum(1,2); // 3
console.log = (`sum: ${sum(1,2)}`);

// 7. early return, early exit
// bad
function upgraderUser(user){
  if(user.point>0){
    // long upgrade logic
  }
}
//good
function upgradeUser(user){
  if (user.point <=10){
    return;
  }
  //long upgrade logic
}