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