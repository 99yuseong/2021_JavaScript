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

// 2. Computed properties (계산된 프로퍼티)
// key should be always string ''
// 동적으로 프로퍼티 값을 받아올 때 유용하게 사용
console.log(ellie.name);
console.log(ellie["name"]); // computed property
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]); // 해당 값 출력
}
printValue(ellie, "name");
printValue(ellie, "age");

// 09:00
