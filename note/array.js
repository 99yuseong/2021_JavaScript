"use strict";

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
