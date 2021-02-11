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
