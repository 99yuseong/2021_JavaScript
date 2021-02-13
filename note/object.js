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
