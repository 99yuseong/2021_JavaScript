// greeting contents

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER = "currentUser";
const BLOCK = "blocking";

// 1. loadName function
// saved name > welcoming function
// new > askName function

function loadName() {
  const userName = localStorage.getItem(USER);
  if (userName === null) {
    askName();
  } else {
    welcoming(userName);
  }
}

// 1-1. welcoming function (saved name)
// parameter > get saved name from localstorage
// classList.add (display block)
// classList.remove (display none)
// by using class make display of greeting block/none
// innerText = `Hello ${saved name}`

function welcoming(name) {
  form.classList.add(BLOCK);
  greeting.classList.remove(BLOCK);
  greeting.innerText = `hello ${name}`;
}

// 1-2-1. askName function
// do not know name, ask and get value
// classList.add (display block) > name question
// eventlistener > submit > handleSubmit function

function askName() {
  input.classList.remove(BLOCK);
  form.addEventListener("submit", handleSubmit);
}

// 1-2-1. handleSumbit function
// first. save name at localStorage > saveName function
// second. greeting users > wecoming function (1-1)
function handleSubmit(event) {
  event.preventDefault();
  const currentUser = input.value;
  welcoming(currentUser);
  saveName(currentUser);
}

// 1-2-1-1. saveName function
// save at local storage
// localStorage.setitem(variable, parameter)

function saveName(name) {
  localStorage.setItem(USER, name);
}

// clock working

const clockContainer = document.querySelector(".clock");
const clockTime = document.querySelector(".real-time");

// 1. getTime function
// which get time by using Date() function

// Date();
// xxx.getHours();
// xxx.getMinutes();
// xxx.getSeconds();
// setInterval(xxx.ms);

function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  // make times like 00:00:00 forms
  // (conditions) ? (true) : (false)
  clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// to do list
////////////////////////////////////// 21/04/01 ////////////////////////////////////////////
// username > saved at localStorage, maintain at html after reset
// // key: currentUser, value: input.value
// toDoList > saved at localStorage, but disappear after reset
// // key: TODOS.length, value: input.value
// // // additionally set list's class TODOS.length
// > if delete localStorage data, ok
// > if delete from array, may same key and li class can appear
// > then array's length should be unlimited.....
// > Array can save total 4294967295 data

// > answer find another id reset type .. ? time? year month day hour minute second...?
// > and change localStorage save type > as an object

////////////////////////////////////// 21/04/02 ////////////////////////////////////////////
// - done! loadToDos(), deleteLocal() and change

// - change todos key: input.value, value: input.value > it can make unique id
// - change array form [{key: input.value, value: input.value}, ....]
// - can delete localStorage data and html list once
// - now do not deleted after reset
// - TODOS is defined for every F5 by localStorage

const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");
const SAVETYPE = "toDoData";

let TODOS = {};

// 6. loadToDO()
// now we should make not to reset todo list
// use Object.keys().length !== 0
// exist any key > stack
function loadToDo() {
  const getToDos = localStorage.getItem(SAVETYPE);
  if (getToDos !== null) {
    const check = JSON.parse(getToDos);
    TODOS = check;
    const arrayToDo = Object.keys(check);
    for (i = 0; i < arrayToDo.length; i++) {
      stackToDos(arrayToDo[i]);
    }
  }

  // if (arrayToDo.length > 0) {
  // 	for (i = 0; i < arrayToDo.length; i++) {
  // 		console.log("1");
  // 	}
  // }
}
// 5. deleteLocal()
// it will store that like key : TODOS.length, value : input.value
// <ul class = "toDoList">
// 	<li class = "key">
// 		<span>key</span>
// 		<button>x</button>
// 	</li>
// </ul>

function deleteLocal(delKey) {
  delete TODOS[delKey];
  localStorage.setItem(SAVETYPE, JSON.stringify(TODOS));
}

// 4. saveLocalStorage()
// make id and object 1 to 1
// use id with length of array
// uset localStorage.setItem(key, value);
function saveLocalStorage(text) {
  const saveType = {
    key: text,
    value: text
  };
  this.text = text;
  TODOS[text] = saveType;
  localStorage.setItem(SAVETYPE, JSON.stringify(TODOS));
}

// 3. deleteToDos()
// make variable to specify exact button and list to delete it
// use event.target for clicked button
// use parentNode method for btn's parent element > li
// use removeChild() to delete element
function deleteToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // delete li
  deleteLocal(li.children[0].innerText);
}

// 2. stackToDos() function
// we want to make element that has input.value and delete button
// use document.createElement method
// > will make element but not appear at html
// use appendChild() method to set the position of element
// > can set what part that element to get in
function stackToDos(todos) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  list.appendChild(span);
  list.appendChild(btn);
  span.innerText = todos;
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDos);
  toDoList.appendChild(list);
}

// 1. addEventListener at form > has submit event > but input is not
// with event.preventDefault(); > prevent reset(F5) after submit default
// and it's input value > get in variable
// and make stack with todolist
// + more detail > if we enter th value, then make the input empty so we can stack without erase
function handleToDoSubmit(event) {
  event.preventDefault();
  const todos = toDoInput.value;
  stackToDos(todos);
  saveLocalStorage(todos);
  toDoInput.value = "";
}

// background img change
////////////////////////////////////// 21/04/03 ////////////////////////////////////////////
// 1. get some pictures and use url to change body background-image

// classList add > body

const body = document.querySelector("body");
const imgNum = 5;

function pickImg(img) {
  if (body.classList.length === 0) {
    body.classList.add(img);
  } else if (body.className === img) {
    randomPick();
  } else {
    body.className = img;
  }
}

// loadend, click > random function > pick img class > add classList
function randomPick(event) {
  const random = Math.floor(Math.random() * imgNum);
  const ImgClass = `img${random + 1}`;
  pickImg(ImgClass);
}

////////////////////////////////////// 21/04/04 ////////////////////////////////////////////
const weatherCurrent = document.querySelector(".js-weather");
const tempCurrent = document.querySelector(".js-temp");
const placeCurrent = document.querySelector(".js-place");

const COORDS = "coords";

const API_KEY = "471c49127ef18894ae534fcbbfd1652e";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {
      const temp = Math.floor(json.main.temp);
      const weather = json.weather[0].main;
      const place = json.name;
      weatherCurrent.innerText = `${weather}`;
      tempCurrent.innerText = `${temp}℃`;
      placeCurrent.innerText = `${place}`;
    });
}

function saveLocal(localCoordsData) {
  localStorage.setItem(COORDS, localCoordsData);
}

function successCoords(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsData = {
    lat: lat,
    lon: lon
  };
  const localCoordsData = JSON.stringify(coordsData);
  getWeather(lat, lon);
  saveLocal(localCoordsData);
}

function errorCoords() {
  console.log("cant get geo data");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(successCoords, errorCoords);
}

function loadCoords() {
  const localCoords = localStorage.getItem(COORDS);
  const coords = JSON.parse(localCoords);
  if (localCoords === null) {
    askCoords();
  } else {
    getWeather(coords.lat, coords.lon);
  }
}

// 1. loadCoords()
// get from localStorage coord data
// if there is no data
// 2. function ask the coords
// use navigator.geolocation.getCurrentPosition(success, error, options);
// 3. make success function > get data lat, log
// 4. make error function > error
// 5. savelocal > localStorage > JSON.stringify
// 6. get weather > use API with fetch

// 2. init function
// start of operation
// and make interval which means we get date value for every seconds
function init() {
  getTime();
  // reset for real-time for every seconds
  setInterval(getTime, 1000);
  loadName();
  loadToDo();
  toDoForm.addEventListener("submit", handleToDoSubmit);
  // body.addEventListener("click", randomPick);
  window.addEventListener("load", randomPick);
  loadCoords();
}

init();
