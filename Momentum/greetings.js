const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CN); // 이름을 물어보는 form을 display none으로
  greetings.classList.add(SHOWING_CN); // 환영하는 greetings를 display block으로
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("USER_LS");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}
// local storage
// 적은 정보를 사용자의 컴퓨터에 저장하는 방법

function init() {
  loadName();
}

init();

