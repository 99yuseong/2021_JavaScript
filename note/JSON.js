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

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple", "banana"]

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  }, // 함수는 데이터가 아니기 때문에 저장 안됨
  symbol: Symbol("id") // 자바스크립트 언어에만 존재하는 symbol도 저장 안됨
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":"null","birthDate":"2021-04-04T22:36:14.528Z"}

json = JSON.stringify(rabbit, ["name", "color", "size"]); // 원하는 프로퍼티만 골라서 저장가능
console.log(json); // {"name":"tori","color":"white","size":"null"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
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
  return key === "birthDate" ? new Date(value) : value;
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
