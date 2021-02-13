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

// 1.5 symbol (added in ES6)
//  > 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용
//  > immutable variable (변경불가능)

// 1.5.1 symbol의 생성
//  > Symbol() 함수를 이용해 생성
//  >

//poiemaweb.com/es6-symbol
https: //includestdio.tistory.com/26

// Symbol
// create unique identifiers for object
// 고유한 식별자, 우선 순위 부여
// 동일한 ID이더라도 다른 ID로 식별
https: const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`); // 문자열로 바꿔서 출력
// value : id, type : symbol

// Reference
// https://poiemaweb.com/es6-block-scope
// https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
// inside javascript 한빛 미디어
