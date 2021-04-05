// 3. async & await
// 프로미스를 좀더 간결하고 간편하고 동기적으로 실행되는 것처럼 만들어줌
// 상황에 따라 프로미스를 쓰는게 더 깔끔한 경우도 있음
// syntactic sugar
// clear style of using promise :)

// 1. async
// 사용자의 정보를 백엔드에서 받아오는 함수를 만들어보자
function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
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
    resolve("ellie");
  });
}
const user = fetchUser();
user.then(console.log);

// async 키워드를 붙이면 자동으로 함수 안 코드들이 프로미스로 변환됨
// 즉 간편하게 프로미스를 사용가능!
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}
// 프로미스를 쓴것처럼 동일하게 사용가능!
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// async가 붙은 함수 안에서만 사용가능
// delay : 정해진 시간이 지나면 resolve를 호출하는 프로미스를 리턴하는 함수
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// 한번에 과일을 다 따오는 함수

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
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
  return Promise.all([getApple(), getBanana()]).then(
    (fruits) => fruits.join(" + ") // 배열을 문자열로 묶는 메소드
  );
}
pickAllFruits().then(console.log);

// 먼저 따지는 하나만 받아오고 싶다
// Promise.race 가장 먼저 전달되는 녀석만 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
