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
  console.log("doing something...");
  setTimeout(() => {
    // 네트워크 통신을 하는 것처럼 시간을 딜레이
    resolve("ellie"); // 성공적으로 잘했어 'ellie'값을 전달
    // reject(new Error('no network')); // 에러가 났어
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 위 세가지를 이용해서 값을 받아올 수 있음
promise // 정상적으로 잘 작동해서 받아온 값
  .then((value) => {
    // then을 사용하면 리턴값으로 promise가 리턴되므로 다시 catch나 finally 등을 사용할 수 있음
    console.log(value); // 'ellie'
  })
  .catch((error) => {
    // 에러가 발생했을 때
    console.log(error);
  })
  .finally(() => {
    // 최근에 추가, 성공 실패 하든 마지막에 호출되는 녀석. 성공실패 상관없이 어떤 기능을 수행
    console.log("finally");
  });

// 3. Promise chaining
// 서버에서 숫자를 받아오는 프로미스를 만들어 보자
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1초 후 숫자 1을 전달
});

fetchNumber
  .then((num) => num * 2) // 성공적으로 잘 되면 2 곱하고
  .then((num) => num * 3) // 성공적으로 잘되면 3 곱하고
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 새로운 프로미스에서 1을 뺀 후 값을 전달
  })
  .then((num) => console.log(num)); // 숫자 5 출력 2초 소요

// 4. Error Handling
// 총 3개의 프로미스를 리턴
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    // setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then((hen) => getEgg(hen)) // 1초 받아온 인수를 그대로 전달할 경우 (getEgg)로 생략가능
  // .catch(error => { // 에러가 생겨도 문제가 되지 않게 빵꾸 처리가능
  // 	return '빵';
  // })
  .then((egg) => cook(egg)) // 2초
  .then((meal) => console.log(meal)) // 3초 🐓 => 🥚 => 🍳
  .catch(console.log);

///////////////////////////////////////////////

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
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
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// Homework Answer 🚀
userStorage
  .getUserWithRole() //
  .catch(console.log)
  .then(console.log);
