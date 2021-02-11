// 1. use strict (added in ES5)
// use this for Vanila Javascript
"use strict";

// 2. Variables (변수)
// let (added in ES6)
// mutable variable
let name = "ellie"; // 변수 선언
console.log(name); // ellie 출력
name = "hello"; // 변수 값 재할당시 따로 let을 붙일 필요없음
console.log(name);

// * block scope {}
// 블럭 안에서 정의된 변수/함수는 블럭 밖에서 사용할 수 없음
// 지역 변수(local variables)
// 블럭 밖에서 정의된 변수/함수는 블럭 안에서 사용 가능
// 전역 변수(global variables)
// 실행되는 시작부터 종료까지 메모리에 저장되므로 최소한 사용

// Var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했는지 상관없이 선언을 위로 끌어올려 주는 것
// var의 경우에는 선언 전에 변수를 사용하더라도 이미 선언돼 undefined 값으로 메모리 저장
// block scope 적용 안됨

// Constant (상수, 선언 후 값 변경 X)
// immutable variables
// favor immutable data type always for a few reasons
// security (해킹의 위협으로 부터 정보 변경 보호)
// thread safety (여러 thread에서 한번에 값이 변경되는 우려 방지)
// reduce human mistakes (런타임 중에 변수의 값이 다시 재할당되어 실수로 바뀌는 경우가 많음)

// 4. variable types
// Immutable data types : premitive types(기본 타입), frozen objects
// premitive, single items : number, string, boolean, null, undefined, symbol
// >> 값 자체를 메모리에 저장
// >> 기본 타입
// Mutable data types : all objects by default are mutable in JS
// object (single item들을 묶어서 관리), box container, function, first-class function
// >> 값을 가르키는 reference를 메모리에 저장
// >> 참조 타입
// 변수에 할당 가능, 함수의 인자로 전달, return 타입으로 리턴 가능
const count = 17; // integer > type: number
const size = 17.1; // decimal number > type: number
console.log(`value: ${count}, type : ${typeof count}`);

// number - special numeric values: infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigint (fairy new, don't use it yet)
// JS의 숫자 범위는 2**(-53) ~ 2**%53
const bigInt = 123456789012345678901234567890n; // 맨뒤에 n 적어야함
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

// string
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

// Boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

// null
// null로 값 할당(명시적으로 값이 비어있음을 나타내기 위해 사용)
// typeof null > object , value > null

// undefined
// typeof undefined > undefined , value > undefined
// undefined는 타입이자 값을 나타냄

// Symbol
// create unique identifiers for object
// 고유한 식별자, 우선 순위 부여
// 동일한 ID이더라도 다른 ID로 식별
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`); // 문자열로 바꿔서 출력
// value : id, type : symbol

// 5. Dynamic typing : dynamically typed language > return 때 변수의 type이 계속 바뀔수 있음
let text = "7" + 5; // 75(문자열)
text = "7" + "5"; // 75(문자열)
text = "7" / "5";
// 1.4 (number)
console.log(text);
