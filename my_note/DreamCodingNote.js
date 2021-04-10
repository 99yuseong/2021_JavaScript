// async vs defer

// html head 안에 script
// parsing HTML - fetching js - executing js - parsing HTML

// html body 끝에 script
// parsing HTML - fetching js - executing js

// head 안에 script + async
// <script async src="index.js"></script>
// parsing HTML ----- blocked ---- parsing html
//  - fetching js - executing js (병렬적으로 일어남)

// head 안에 script + defer
// <script defer src="index.js"></script>
// parsing HTML ------ executing js
//  - fetching js



// ------------------------------------------------------------------------
// variable declaration(변수 선언)
// ------------------------------------------------------------------------

// 다른 프로그래밍 언어들과 달리 예약어(e.g. int, double 등)을 사용하지 않는다
// >> 왜냐면 변수에 저장되는 데이터의 형태에 따라 변수의 타입을 결정하기 때문

// 1. var (don't ever use this!)
//    - ES5까지 사용된 변수 선언 방식
//    - * var hoisting (move declaration from bottom to top)
//        어디에 선언했는지 상관없이 선언을 위로 끌어올려 주는 것
//        >  변수를 선언하기도 전에 참조할 수 있는 문제 발생
//        >  선언 전에 변수를 사용하더라도 이미 선언돼 undefined 값으로 메모리 저장
//    - function-block scope 적용, 즉 함수 블록만 스코프로 인정
//    - 중복 선언 허용
//    - var 키워드 생략 허용 > 이상한 전역변수 실수로 선언할 가능성

//    이러한 단점들을 보완하기 위해 ES6에서 let, const를 도입!
//        변수의 타입에 따라 선언 방식이 달라짐
//          - let > 값이 변할 수 있는 변수
//          - const > 값이 고정된 변수

// 2. let (added in ES6)

//    - mutable variable(값이 변할 수 있는 변수)를 선언할 때 사용
//    - 블록 유효범위를 갖는 지역변수 선언
//    - 선언과 동시에 임의의 값으로 초기화 가능
//    - 값 재할당시 let을 적지 않고 재할당하면 됨

let x = 1;
// 선언과 동시에 1이란 값을 할당
if (x === 1) {
  let x = 2;
  // let은 블록 유효 범위를 갖기 때문에 블록 밖에서 선언한 값과는 상관없음
  console.log(x);
  // 당연히 블록안에서는 2의 값으로 출력
}
console.log(x);
// 블록 밖에서는 기존 1의 값으로 출력
x = 3;
// 값을 3으로 재할당
console.log(x);
// 3이 출력됨

////////////////////////////////////////////////////////////////////////////////////////

//        * 블록 유효범위(block-level scope)란?
//            모든 코드 블록(함수, if 문, for문, while 문, try/catch 문등) 내에서 선언된 변수는
//            코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
//            즉, 코드블록 내부에서 선언한 변수는 모두 지역변수이다.

//        * 지역변수(local variable), 전역변수(global variable)
//            지역변수(local variable)
//                - 블록 내부(함수 내부)에서 선언된 변수로, 함수가 실행되면 만들어지고
//                함수가 종료되면 소멸하는 변수. 함수 외부에서 접근할 수 없음
//            전역변수(global variable)
//                - 블록 외부(함수 외부)에서 선언된 변수로, 프로그램 전체에서 접근할 수 있음
//                - 실행되는 시작부터 종료까지 메모리에 저장되므로 최소한 사용

////////////////////////////////////////////////////////////////////////////////////////

// 3. const (added In ES6)

//    - immutable variable(변하지 않는 값, 상수)를 선언할 때 사용
//    - 값 재할당 불가능, 다시 선언 불가능
//    - 반드시 선언과 동시에 할당이 이뤄져야 함
//        const y; >> SyntaxError: Missing initializer in const declaration
//    - 블록 유효범위를 갖는다
//    - Object(객체)에도 사용가능
//        > 객체에 할당된 reference의 주소 값이 변경되지 않게 된다
//        > 즉, ref의 재할당은 불가능하나 ref가 가르키는 객체의 프로퍼티의 값자체는 변경이 가능하다
//        (프로퍼티의 추가, 삭제, 값 변경 가능)
//        > 객체 타입변수 선언은 const로 하는 것이 좋음

// 3.1 e.g. 객체에서의 const 사용
const user = { name: "Lee" };
// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.
user.name = "Kim";
// 객체의 내용은 변경할 수 있다.
console.log(user);
// { name: 'Kim' }

// 3.2 e.g. 가독성을 위한 const의 사용
let rows;
if (rows > 10) {
  // 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
}
const MAXROWS = 10;
if (rows > MAXROWS) {
  // 값의 의미를 명확히 기술하여 가독성이 향상되었다.
}

////////////////////////////////////////////////////////////////////////////////////////

// * 호이스팅 (hoisting)
//    모든 선언문(var, let, const, function, class 등)을 해당 스코프 선두에 옮긴 듯 동작하는 것

//    - var의 경우에는 선언과 초기화가 동시에 일어난다(입력된 값이나 undefined 할당)
//    - 하지만 let의 경우에는 선언과 초기화가 분리되어 진행된다
//        > 즉, 스코프에 변수를 등록(선언단계)하지만 초기화 단계는 변수 선언문에 도달했을 때 이루어진다.
//        > 선언된 변수는 선언 후 초기화 전에 일시적 사각지대(Temporal Dead Zone)에 빠지게 된다
//        > 초기화 되기 전의 변수에 접근할 경우 참조 에러(reference)가 뜨게 된다

// e.g. let 호이스팅 예시
// 스코프의 선두에서 선언 단계가 실행
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.
console.log(foo);
// ReferenceError: foo is not defined
let foo;
// 변수 선언문에서 초기화 단계가 실행된다.(이때 메모리 공간 확보, undefined 값 할당)
console.log(foo);
// undefined
foo = 1;
// 할당문에서 할당 단계가 실행된다.
console.log(foo);
// 1

// let, const등은 var hoisting에서 발생하는 문제점을 해결하기 위해 도입되었고
// let 키워드로 선언되기 전에 참조하면 참조 에러가 뜨는데
// hoisting이 없는 것처럼 보이지만 실제로 hoisting이 일어난다
// e.g.
let Foo = 1;
// 전역 변수 선언
{
  console.log(Foo);
  // ReferenceError: foo is not defined
  // 전역변수 값인 1이 출력될 것 같지만, hoisting에 의해 블록 안의 영향을 받게된다
  let Foo = 2;
  // 지역 변수
}
////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------------------------------
// variable type(변수 타입)
// ------------------------------------------------------------------------

// 자바스크립트의 변수는 아래 두가지 타입으로 구분된다
//    1. 기본타입(primitive type)
//      > 그 자체가 하나의 값을 나타낸다 (값을 메모리에 저장)
//        - 숫자(number)
//        - 문자열(string)
//        - 불린값(boolean)
//        - undefined
//        - null
//        - symbol
//    2. 참조타입(reference type)
//      > 값을 가르키는 reference 값을 메모리에 저장
//      > 변수에 할당 가능, 함수의 인자로 전달가능, 리턴 타입으로 리턴가능
//        - 객체(object)
//            > 배열(array)
//            > 함수(function)
//            > 정규표현식

// 1.1.1 숫자(number)
//  > 모든 숫자를 64비트 부동 소수점형태로 저장
//  > 모든 숫자의 type은 'number'로 고정
//  > 모든 숫자를 실수로 처리
const count = 17; // integer > type: number
const size = 17.1; // decimal number > type: number
console.log(`value: ${count}, type : ${typeof count}`);

// 1.1.2 special numeric values
//    - infinity
//    - -infinity
//    - NaN (not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// 1.1.3 bigint (fairy new, don't use it yet)
// JS의 숫자 범위는 2**(-53) ~ 2**%53
const bigInt = 123456789012345678901234567890n; // 맨뒤에 n 적어야함
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

// 1.2 문자열 (string)
//  > 따옴표를 이용해 생성
//  > 한 번 생성된 문자열은 인덱스를 이용해 읽기는 가능하지만
//  > 인덱스를 이용해 한 글자씩 수정 불가능

const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(greeting); // hello brendan
const helloBob = `hi ${brendan}!`;
console.log(helloBob); //hi brendan!

// template literals (string)
// 연산자 사용 없이 한번에 문자열 표현 가능
`value : ${brendan}, type : ${typeof brendan}`; // 작은따옴표 아님
"value :" + brendan + "type :" + typeof brendan; // 상당히 번거로움

// 1.3 불린값(boolean)
//  > true, false 값
// false : 0, null, undefined, NaN, ''
// true : any other value

// 1.4 null and undefined
//  > 모두 '값이 비어있음'을 나타냄
//    - null
//      > 명시적으로 값이 비어있음을 나타내기 위해 할당하는 값
//      > value : null, type : object
//    - undefined
//      > 값이 할당되지 않았을때 초기화하며 값 할당
//      > 타입이자 값을 나타냄
//      > value : undefined, type : undefined

// (잘 모르겠는 개념)
// 1.5 symbol (added in ES6)
//  > 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용
//  > immutable variable (변경불가능)

// 1.5.1 symbol의 생성
//  > Symbol() 함수를 이용해 호출될 때마다 값 생성
//  > 문자열을 인자로 전달가능

// 1.5.2 Symbol의 사용
// create unique identifiers for object
// 고유한 식별자, 우선 순위 부여
// 동일한 ID이더라도 다른 ID로 식별
// 즉, 유일한 값이므로 Symbol 값을 키로 받는 프로퍼티는 어떠한 프로퍼티와 충돌 X
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`); // 문자열로 바꿔서 출력
// value : id, type : symbol
// Symbol.for
// Symbol.for 메소드는 인자로 전달받은 문자열을 키로 사용하여 Symbol 값들이 저장되어 있는 전역 Symbol 레지스트리에서 해당 키와 일치하는 저장된 Symbol 값을 검색한다. 이때 검색에 성공하면 검색된 Symbol 값을 반환하고, 검색에 실패하면 새로운 Symbol 값을 생성하여 해당 키로 전역 Symbol 레지스트리에 저장한 후, Symbol 값을 반환한다.

// Reference
// https://poiemaweb.com/es6-block-scope
// https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
// inside javascript 한빛 미디어


// ------------------------------------------------------------------------
// operator
// ------------------------------------------------------------------------

// 1. string concatenation
console.log("my" + "cat"); // my cat
console.log("1" + 2); // 12(문자열)
console.log(`string literals: 1+2 = ${1 + 2}`); // string literals: 1+2 = 3
// ${}안의 값을 계산/ 변수의 값을 대입해서 출력

// 2. numeric operators
// + - / * % **(eponentiation)

// 3. Increment and decrement operators (증감연산자)
let counter = 2;
const preIncrement = ++counter; // 먼저 더해준 후 값 할당
// >> counter = counter + 1;
// >> preIncrement = counter;
const postIncrement = counter++; // 먼저 값 할당 후 더해줌
// >> postIncrement = counter;
// >> counter = counter + 1;
const preDecrement = --counter; // 먼저 빼준 후 값 할당
// >> counter = counter - 1;
// >> preDecrement = counter;
const postDecrement = counter--; // 먼저 값 할당 후 빼줌
// >> postDecrement = counter;
// >> counter = counter - 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operators
// || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false
// ||(or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`); // 하나라도 true이면 true 출력
function check() {
  for (let i = 0; i < 10; i++) {
    //waisting time
    console.log(1);
  }
  return true;
}
// &&(and), find the falsy value
console.log(`and: ${value1 && value2 && check()}`); // 하나라도 false이면 false 출력
//often used to compress long if-statement
// nullableobject && nullableobject.something
let nullableobject;
if (nullableobject != null) {
  nullableobject.something;
}

// !(not) 값을 반대로 할당
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberfive = 5;

// == (동등연산자)loose equality, with type conversion 타입이 다르면 같게 바꿔서 비교
console.log(stringFive == numberfive); // true
console.log(stringFive != numberfive); // false
// === (일치연산자) strict equality, no type conversion
console.log(stringFive === numberfive); // false
console.log(stringFive !== numberfive); // true

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
// ellie1과 ellie2가 가르키는 reference가 다르지만 reference가 가르키는 값은 동일함
// ellie1 > ref1 > name : 'ellie'
// ellie2 > ref2 > name : 'ellie'
const ellie3 = ellie1;
// ellie3는 ellie1과 같은 ref1을 가르키게됨
console.log(ellie1 == ellie2); // false ref가 다름
console.log(ellie1 === ellie2); // false ref다르니 당연
console.log(ellie1 === ellie3); // true 같은 ref가 할당됨

// equality puzzler
console.log(0 == false); // true
console.log(0 === false); // false, type이 다름
console.log("" == false); // true
console.log("" === false); // false, type이 다름
console.log(null == undefined); // true
console.log(null === undefined); // false, type이 다름

// 8. Confitional operators (조건연산자)
// if / else if / else
const name = "ellie";
if (name === "ellie") {
  console.log(`welcome ${name}`);
} else if (name === "coder") {
  console.log("you are amzing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator (삼항 조건 연산자)
// condition ? expr1 : expr2;
// condition이 true이면, 연산자는 expr1의 값을 반환하며, 반대의 경우 expr2를 반환한다.
console.log(name === "ellie" ? "yes" : "no");

// 10. switch statment
// use for multiple if checks
// use for enum-like value check (열거형 값들, 배열)
// use for multiple type checks in JS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("Go away");
    break;
  case "FireFox":
    console.log("love you");
    break;
  case "Chrome":
    console.log("love you");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// do while loop, body code is executed first, then check the condition
do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);
// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}
for (i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline varialbe for : ${i}`);
}

// ------------------------------------------------------------------------
// function
// ------------------------------------------------------------------------

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
// 조건이 맞지 않을 경우 빨리 리턴을 하고
// 조건이 맞을 경우에만 해당 로직을 수행하도록
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
// 함수를 인자로 전달하여 원할때 호출할 수 있는 함수

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


// ------------------------------------------------------------------------
// class
// ------------------------------------------------------------------------
// 객체를 찍어내기 위한 방법

// Object-oriented programming
// class: template 판
// object: instance of a class 판에서 찍어내는 객체
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over proptotype-based inheritance
// (프로토 타입기반 위에 문법만 간단히 추가)

// 1. Class declarations
class Person {
  // constructor (생성자)
  // 객체가 생성될 때 자동으로 실행되는 메소드
  constructor(name, age) {
    // field (데이터를 할당)
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}
// 새로운 object를 만들때는 new를 사용
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setter
// 인자값을 그지같이 전달해도 다시 값을 조정해 주는 것

// 접근자 프로퍼티(accessor property)
// 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티
// 값을 획득(get)하고 설정(set)하는 역할 담당
// 접근자란 객체지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서
// 읽거나 쓸 수 있도록 제공하는 메서드
class User {
  constructor(firstName, lastName, age) {
    // data property
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // accessot property
  get age() {
    // 값을 리턴
    // User.age를 사용해 프로퍼티를 읽으려고 할 때 실행
    return this._age; // _age는 class안에서만 쓰이고 밖에서 사용하지 않도록!
  }

  set age(value) {
    // 값을 설정, 즉 값을 받아와야 함
    // User.age = value로 프로퍼티에 값을 할당하려 할때 실행
    // if (value < 0) {
    // throw Error ('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);
// user1을 선언하면서 steve job -1을 각각 인자로 class에 전달하면
// 각각의 dataproperty에 이름은 저장되고
// user1.age = -1이 되면서 setter를 호출
// 조건에 의해서 this._age = 0으로 값이 할당
// 외부에서 user1.age를 실행 시 getter가 실행되서 user1._age값을 리턴해서
// 사용자는 user1.age 값으로 0을 출력받게 됨

// 3. Fields (public, private)
// Too soon!
//
class Experiment {
  // 생성자 없이 field 생성
  publicField = 2; // 클래스 내/외부에서 값을 읽거나 변경가능
  #privateField = 0; // 클래스 외부에서는 값을 읽거나 변경불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //class외부에서는 읽으면 undefined

// 4. static properties and methods
// Too soon!
// 새로운 object가 만들어지는 것과 상관없이 class가 가지고 있는 고유한 값
// 데이터와 상관없이 동일하게 반복적으로 사용되는 method
// static을 이용하면 object에 할당되는 값이 아니라
// class 자체에 할당되는 값
// e.g. ClassName.property의 형태로 사용할 수 있음
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangular extends Shape {}
// extends를 이용하면 Shape에서 정한 field와 method가 자동으로 포함
class Triangle extends Shape {
  // overriding
  // 필요한 부분만 수정
  // 더이상 상속받은 부분이 호출되지 않음
  getArea() {
    return (this.width * this.height) / 2;
  }

  draw() {
    super.draw(); // 상속받는 부모의 draw함수 호출가능
    console.log("세모");
  }
}

const rectangular = new Rectangular(20, 20, "blue");
rectangular.draw();
const triangle = new Triangle(20, 20, "red");
triangle.draw();

// 6. class checking: instanceOf
// 왼쪽의 object가 오른쪽의 class를 이용해 만들어진지를 확인
// true/ false 출력
console.log(rectangular instanceof Rectangular); t
console.log(triangle instanceof Rectangular); f
console.log(triangle instanceof Triangle); t
console.log(triangle instanceof Shape); t
console.log(triangle instanceof Object); t

// * MDN reference 참조

// ------------------------------------------------------------------------
// object
// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// Object (객체)
// ------------------------------------------------------------------------

// - 자바스크립트를 이루고 있는 거의 모든 것이 객체이다
// - 숫자, 문자열, 불린값, null, undefined 등의 기본타입을 제외한 모든 값
// (즉, 배열, 함수, 정규표현식 등은 모두 객체에 속함)

// - 자바스크립트의 객체는 키(key)와 값(value)으로 구성된 프로퍼티(property)들의 집합
//     > object = { key : value }
// - 프로퍼티 값으로는 자바스크립트에서 사용가능한 모든 값을 사용가능
// - 함수(일급 객체이므로)도 값으로 취급할 수 있는데, 프로퍼티 값이 함수일 경우
// 일반 함수와 구분을 위해 메소드라 부른다

// 1. 프로퍼티(property)
// - 프로퍼티 이름(key)와 프로퍼티 값(value)로 구성
// - 프로퍼티 이름(key)는 프로퍼티를 식별할 수 있는 유일한 식별자(identifier)임
//    > 프로퍼티 키 : 빈 문자열을 포함한 모든 문자열 또는 symbol 값
//        > 문자열이나 symbol값이 아닌 값을 지정할 경우 타입이 문자열로 변환됨
//        > 중복 선언시 덮어씀
//    > 프로퍼티 값 : 자바스크립트에서 사용가능한 모든 값

// 2. 객체 생성방법

// 클래스?!?
// 다른 객체지향언어의 경우 클래스가 정의하고, 연산자를 이용해 인스턴스를 만드는 과정에서 객체를 생성
// 자바스크립트는 '클래스가 없는' 프로토타입 객체지향 언어이다.
// 클래스 없이 프로토타입 체인/클로저 등으로 객체지향 언어의 상속, 캡슐화 등을 구현
// ES6에서 클래스가 도입되었으나, 새롭게 객체지향 모델을 제공하는 것이 아니라(클래스도 사실 함수이다)
// 다른 객체지향 언어에 익숙한 프로그래머들을 위한 문법적 설탕(Syntactic Sugar)로 사용된다.

// 그래서 객체를 생성하는 방법에는 총 3가지가 있다.
//    - 객체 리터럴 방식
//    - Object() 객체 생성자 함수 이용
//      (자바스크립트 내장 생성자 함수)
//    - 생성자 함수 이용

// 2.1 객체 리터럴 방식
//  ('object literal' syntax)
//  - 리터럴을 표기법이라고 생각하면 쉽다
//  - 즉, 객체를 생성하는 표기법이라는 의미
//  - {} (중괄호)를 이용해 객체를 생성할 수 있다.
//      > 중괄호 안에 아무것도 적지않은 경우는 빈 객체가 생성된다

let person = {
  name: "nam",
  gender: "male",
  sayHello: function () {
    // 값이 함수인 프로퍼티는 메서드라 부른다
    console.log("hello. my name is " + this.name);
  }
};
console.log(person);
// {name: "nam", gender: "male", sayHello: ƒ sayHello()}
// name: "nam"
// gender: "male"
// sayHello: ƒ sayHello() {}

// 2.2 Object() 객체 생성자 함수 이용
// new 연산자와 Object 생성자 함수를 호출해 빈 객체를 생성한 후
// 프로퍼티나 메서드를 추가해 객체를 만드는 방식


// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literals and properties
// 객체를 선언하는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 객체의 프로퍼티 값을 새롭게 추가 가능
// 가능하지만 추후에 유지 보수가 힘들어짐
ellie.hasJob = true;
console.log(ellie.hasJob);

// 프로퍼티 삭제도 가능
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties Name(계산된 프로퍼티)
// key should be always string ''
// 동적으로 프로퍼티 값을 받아올 때 유용하게 사용
console.log(ellie.name);
console.log(ellie["name"]); // computed property
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj.key);
  // undefined > 코딩하는 시점에서는 obj라는 객체에 key라는 프로퍼티가 있냐
  console.log(obj[key]);
  // 해당 값 출력 > 동적으로 프로퍼티 값을 받아올 때 유용하게 사용
}
// 실시간으로 원하는 값을 받아올때 computed property 사용
printValue(ellie, "name");
printValue(ellie, "age");

// 3. property value shorthand
// 오브젝트를 만들때 동일한 내용을 반복적으로 작성해야 하는 번거로움
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. constructor function
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in object)
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("random" in ellie); // false
console.log(ellie.random); //undefined

// 6. for..in vs for..of
// for (key in obj)
let key;
for (key in ellie) {
  console.log(key);
}

// for (value of iterable) > 하나씩 순서대로 값을 반환가능한
const array = [1, 2, 4, 5];
let value;
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
console.log(user);

// 객체를 복사하는 방법
// old way
const user3 = {}; // 빈 객체를 만들고
for (let key in user) {
  // 돌면서 값 할당
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
// (복사한 후 넣으려는 타겟, 복사하려는 소스)
// 리턴은 타겟과 소스가 합쳐진
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 뒤에 나오는 동일한 프로퍼티가 값을 덮게 됨

// ------------------------------------------------------------------------
// array
// ------------------------------------------------------------------------

// Array🎉 (배열, 칸칸이 모여있는 자료구조?!?)
// 0부터 인덱스 시작
// 한 배열안에는 동일한 타입의 데이터를 넣는 것이 중요!
// (잡탕가능하지만 되도록이면 No!)
// 인덱스로 접근해서 삽입과 삭제가 쉽게 가능
// 1. Declaration (선언)
const arr1 = new Array();
// new를 사용해서 object를 만드는 것처럼
const arr2 = [1, 2];
// 더 흔하게 사용

// 2. Index position
// 데이터가 인덱스를 기준으로 저장되기 때문에
// 인덱스를 이용한 검색, 삽입, 삭제 방법이 중요
const fruits = ["🍎", "🍌"];
console.log(fruits);
// (2) ["🍎", "🍌"]
//  0: "🍎"
//  1: "🍌"
console.log(fruits.length);
// 2
console.log(fruits[0]);
// 🍎
// object에서는 [key]를 이용해서 value를 돌려받는 것 처럼
// 인덱스를 이용해 값을 돌려받을 수 있음
console.log(fruits[1]);
// 🍌
console.log(fruits[2]);
// undefined
console.log(fruits[fruits.length - 1]);
// 배열 마지막의 데이터를 찾기 위한 방법
// [ 배열 길이 - 1 ] > 제일 마지막 인덱스
// 🍌

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
// a of b > b의 데이터를 a에 할당
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach라는 API이용해서 출력
// ctrl + click 직접 내용확인해보세요
// 배열 안의 value들 마다 전달한 함수를 출력하는 구나
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// 삽입, 삭제, 복사
// push: add an item to the end
// 맨 뒤에 아이템 넣기
fruits.push("🍓", "🍑");
console.log(fruits);
//(4) ["🍎", "🍌", "🍓", "🍑"]
// 0: "🍎"
// 1: "🍌"
// 2: "🍓"
// 3: "🍑"

// pop: remove an item from the end
// 맨 뒤의 아이템 빼기
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
// 앞에서부터 데이터를 넣는 API
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the benigging
// 앞에서부터 데이터를 빼는 API
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 배열이 길면 길수록 속도차이가 커짐
// pop, push는 맨뒤의 값만 쓰고, 앞의 값들을 이동할 필요 X
// 하지만, shift, unshift는 뒤의 데이터 모두를 옮겨야하는 일을 반복

// splice: remove an item by index position
// 배열에서 구간의 값(시작점, 카운트)를 빼고 그자리에 추가로 값을 더할 수 있음
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
// (시작하는 인덱스), (몇 개를 지울건지)
console.log(fruits);
// (4) ["🍎", "🍓", "🍑", "🍋"]
// 0: "🍎"
// 1: "🍓"
// 2: "🍑"
// 3: "🍋"
fruits.splice(1, 0, "🍏", "🍉");
// 인덱스 1부터 0개를 지우고 뒤의 값들을 추가
console.log(fruits);
// (6) ["🍎", "🍏", "🍉", "🍓", "🍑", "🍋"]
// 0: "🍎"
// 1: "🍏"
// 2: "🍉"
// 3: "🍓"
// 4: "🍑"
// 5: "🍋"

// combine two arrays
// concat을 이용하면 다른 배열을 뒤에 붙일 수 있음
// 배열을 붙인 후 붙은 배열을 리턴
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// (8) ["🍎", "🍏", "🍉", "🍓", "🍑", "🍋", "🍐", "🥥"]
// 0: "🍎"
// 1: "🍏"
// 2: "🍉"
// 3: "🍓"
// 4: "🍑"
// 5: "🍋"
// 6: "🍐"
// 7: "🥥"

// 5. Searching
// indexOf: find the index
// 없는 값 입력시 -1 출력
// 동일한 값이 여러개 있어도 가장 먼저 만나는 인덱스를 출력
console.clear();
// console.log(fruits);
// (8) ["🍎", "🍏", "🍉", "🍓", "🍑", "🍋", "🍐", "🥥"]
// 0: "🍎"
// 1: "🍏"
// 2: "🍉"
// 3: "🍓"
// 4: "🍑"
// 5: "🍋"
// 6: "🍐"
// 7: "🥥"
console.log(fruits.indexOf("🍎"));
// 0
console.log(fruits.indexOf("🍉"));
// 2
console.log(fruits.indexOf("🥥"));
// 7

// includes
console.log(fruits.includes("🍉"));
// true
console.log(fruits.includes("🥥"));
// true

// lastIndexOf
// 동일한 값이 여러개 있을때 indexof와 달리 가장 마지막에 있는 인덱스를 출력
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🥥"));

// ------------------------------------------------------------------------
// array API
// ------------------------------------------------------------------------

interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): T | undefined;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: T[]): number;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): T[];
  /**
   * Removes the first element from an array and returns it.
   */
  shift(): T | undefined;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): T[];
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  [n: number]: T;
}

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev.score + curr.score);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}

//////////////////////////////////////////////////////////////////////////////
// HTTP란?
// 	Hypertext Transfer Protocal
// 	어떻게 client와 server가 통신할 수 있는지를 정의한 것(request response)

// AJAX란?
// 	Asynchronous JavaScript And XML
// 	웹페이지에서 동적으로 데이터를 주고받을 수 있는 기술
// 		대표적인 예) XHR
// 									XMLHttpRequest라는 object
// 									XML과는 연관없음
// 									browser API에서 제공
// 									간단하게 서버에 데이터를 요청 받아올 수 있음

// 								fetch() API
// 									역시 browser API에서 제공
// 									internet exploror 지원 안됨
// XML이란?
// 	html과 같은 마크업 언어 중 하나
// 	불필요한 태그들이 많아서 불필요한 데이터를 주고받게 됨

// JSON
// 	그래서 최근에는 JSON을 많이 사용
// 	Javascript Object Notation
// 	Object {key: ,value: }
// 	- simplest data interchange format
// 	- lightweight text-based structure
// 	- easy to read
// 	- key-value pairs
// 	- used for serialization and transmission of data between the network and the network connection
// 		object - (serialize) -> string
// 		string - (deserialize) -> object
// 	- independent programming language and platform
	

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true); //boolean type
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  }, // 함수는 데이터가 아니기 때문에 저장 안됨
	symbol: Symbol('id') // 자바스크립트 언어에만 존재하는 symbol도 저장 안됨
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":"null","birthDate":"2021-04-04T22:36:14.528Z"}


json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 프로퍼티만 골라서 저장가능
console.log(json); // {"name":"tori","color":"white","size":"null"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json); // {"name":"ellie","color":"white","size":"null","birthDate":"2021-04-04T22:36:14.528Z"}

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":"null","birthDate":"2021-04-04T22:36:14.528Z"}

const obj = JSON.parse(json);
console.log(obj); // {name:"ellie",color:"white",size:null,birthDate:"2021-04-04T22:36:14.528Z"}

rabbit.jump(); // 함수 실행
// obj.jump(); // JSON으로 변환하는 과정에서 함수 사라짐

console.log(rabbit.birthDate.getDate()); // birthDate > object 자체
console.log(obj.birthDate.getDate()); // error > birthDate > 문자열

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}); // 콜백함수를 이용해서 문자열에서 객체로 변환 가능

// JSON에 대해 조금더 공부를 하고 싶으시면: 
// MDN ➡️ https://developer.mozilla.org/en-US/d...​
// JavaScript.info ➡️ https://javascript.info/json​
// JavaScript.info 한국어 ➡️ https://ko.javascript.info/json​ 

// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/​
// JSON Beautifier/editor: https://jsonbeautifier.org/​
// JSON Parser: https://jsonparser.org/​
// JSON Validator: https://tools.learningcontainer.com/j...​





///////////////////////////////////////////////////////////////////////////////////////////////////

// 동기/비동기 프로그래밍
// 1. callback

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// 호이스팅이 진행된 이후부터 하나하나씩 정해진 순서에 맞게 동기적으로 코드가 실행된다
// hoisting: var, function declaration

// 비동기적인 실행방법
console.log('1');
setTimeout(function() {console.log('2')}, 1000); 
setTimeout(() => console.log('2'), 1000); 
// 브라우저야 1초후에 함수 실행해줘(나중에 다시 불러줘 callback)
console.log('3');

// callback의 종류
// 1. Synchronous callback
// 동기 콜백
// 즉각 실행
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// 2. Asynchronous callback
// 비동기 콜백
// 언제 실행될 지 모름
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// - 가독성 저하
// - 에러 발생이나 디버깅을 할 때 문제 분석 및 유지보수가 어려움
// - 어떻게 하나요? 어떻게 비동기 코드를 작성하고 병렬적으로 작성하는가


💡Callback에 대해 조금더 공부를 하고 싶으시면: 
MDN ➡️ https://developer.mozilla.org/en-US/d...​
WIKI Callback: https://en.wikipedia.org/wiki/Callbac...​)
JavaScript.info ➡️ https://javascript.info/callbacks​
JavaScript.info 한국어 ➡️ https://ko.javascript.info/callbacks

2. promise
3. async/await



////////////////////////////////////////////////////////////////////////////////////

// 2. promise
// 비동기를 간단하게 처리할 수 있도록 도와주는 object
// 성공이나 에러 발생을 전달

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// 기능 수행 있는중? 기능 완료 성공? 기능 에러?
// Producer vs Consumer
// 정보 제공자, 정보 소비자의 관계

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 비동기적으로 수행하는 프로미스 생성
// 프로미스가 생성되는 순간 전달한 executer 콜백 함수 자동 실행
// 바로 실행되야하는 상황인지 아닌지 유념해서 만들어야함
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => { // 네트워크 통신을 하는 것처럼 시간을 딜레이
    resolve('ellie'); // 성공적으로 잘했어 'ellie'값을 전달
    // reject(new Error('no network')); // 에러가 났어
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 위 세가지를 이용해서 값을 받아올 수 있음
promise // 정상적으로 잘 작동해서 받아온 값
  .then(value => { // then을 사용하면 리턴값으로 promise가 리턴되므로 다시 catch나 finally 등을 사용할 수 있음
    console.log(value); // 'ellie'
  })
  .catch(error => { // 에러가 발생했을 때
    console.log(error);
  })
  .finally(() => { // 최근에 추가, 성공 실패 하든 마지막에 호출되는 녀석. 성공실패 상관없이 어떤 기능을 수행
    console.log('finally');
  });

// 3. Promise chaining
// 서버에서 숫자를 받아오는 프로미스를 만들어 보자
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1초 후 숫자 1을 전달
});

fetchNumber
  .then(num => num * 2) // 성공적으로 잘 되면 2 곱하고
  .then(num => num * 3) // 성공적으로 잘되면 3 곱하고
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 새로운 프로미스에서 1을 뺀 후 값을 전달 
  })
  .then(num => console.log(num)); // 숫자 5 출력 2초 소요

// 4. Error Handling
// 총 3개의 프로미스를 리턴
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    // setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(hen => getEgg(hen)) // 1초 받아온 인수를 그대로 전달할 경우 (getEgg)로 생략가능
	// .catch(error => { // 에러가 생겨도 문제가 되지 않게 빵꾸 처리가능 
	// 	return '빵';
	// })
	.then(egg => cook(egg)) // 2초
  .then(meal => console.log(meal)) // 3초 🐓 => 🥚 => 🍳
  .catch(console.log);
  

///////////////////////////////////////////////

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const user = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage
  .loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// Homework Answer 🚀
userStorage
  .getUserWithRole() //
  .catch(console.log)
  .then(console.log);


//////////////////////////////////////////////////////////////////////

  
// 3. async & await
// 프로미스를 좀더 간결하고 간편하고 동기적으로 실행되는 것처럼 만들어줌
// 상황에 따라 프로미스를 쓰는게 더 깔끔한 경우도 있음
// syntactic sugar
// clear style of using promise :)

// 1. async
// 사용자의 정보를 백엔드에서 받아오는 함수를 만들어보자
function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
console.log(user);
// 비동기적으로 처리하지 않으면 정보받아오는데만 10초...
// 뒤에 있는 코드의 다른 수행이 개 늦어짐
// > 그래서 프로미스를 사용했었음
// > 언제 데이터를 받아올 진 모르겠지만, 콜백함수 등록하면 데이터 받는 대로 콜백함수 실행할게
function fetchUser() {
	return new Promise((resolve, reject) => {
		// do network reqeust in 10 secs....
  	resolve('ellie');	
	})
}
const user = fetchUser();
user.then(console.log);

// async 키워드를 붙이면 자동으로 함수 안 코드들이 프로미스로 변환됨
// 즉 간편하게 프로미스를 사용가능!
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}
// 프로미스를 쓴것처럼 동일하게 사용가능!
const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await ✨
// async가 붙은 함수 안에서만 사용가능
// delay : 정해진 시간이 지나면 resolve를 호출하는 프로미스를 리턴하는 함수
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 기본꼴은
// async function getApple() {
// 	return delay(2000) // chaining
// 	.then (() => '🍎');
// }
// 이렇게 체이닝을 하는 것보다
// 동기적인 코드를 쓰는 것처럼
// await를 사용
async function getApple() {
  await delay(2000); 
	// 2초가 지나면 resolve를 호출하는 프로미스를 리턴
  // await을 쓰면 delay가 끝날때까지 기다렸다가 사과를 리턴
	return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}


// 한번에 과일을 다 따오는 함수

function pickFruits() {
	return getApple().then(apple => {
		return getBanana().then(banana => `${apple} + ${banana}`);
	});
}
pickFruits().then(console.log); // 3초 뒤에 🍎 + 🍌
// 프로미스도 너무 중첩하게되면 콜백지옥과 유사한 문제 발생

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 위와 같이 await이 나열되어 있어 순차적으로 진행하면 비효율적
// 하나 기다렸다 다음 기다렸다

// 관계가 없는 것들을 병렬적으로 실행하면
// 각각 1초동안 처리 즉, 1초가 걸림
async function pickFruits() {
  const applePromise = getApple(); // 프로미스 자동 실행
  const bananaPromise = getBanana(); // 프로미스 자동 실행
	// 만들자 마자 병렬적으로 실행!
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 이런 방식인데 코드가 좀 더럽네?
// API를 쓰자!

// 3. useful APIs ✨
// Promise.all([])
// 배열안의 값들이 다 받아지면 배열이 전달
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
		.then(fruits => fruits.join(' + ') // 배열을 문자열로 묶는 메소드
  );
}
pickAllFruits().then(console.log);


// 먼저 따지는 하나만 받아오고 싶다
// Promise.race 가장 먼저 전달되는 녀석만 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);