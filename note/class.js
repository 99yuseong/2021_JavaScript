// Object-oriented programming
// class: template
// object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over proptotype-based inheritance
// (프로토 타입기반 위에 문법만 간단히 추가)

// 1. Class declarations
class Person {
  // constructor (생성자)
  // 객체가 생성될 때 자동으로 실행되는 메소드
  constructor(name, age) {
    // field (데이터를 할당)
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}
// 새로운 object를 만들때는 new를 사용
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setter
// 접근자 프로퍼티(accessor property)
// 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티
// 값을 획득(get)하고 설정(set)하는 역할 담당
// 접근자란 객체지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서
// 읽거나 쓸 수 있도록 제공하는 메서드
class User {
  constructor(firstName, lastName, age) {
    // data property
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // accessot property
  get age() {
    // 값을 리턴
    // User.age를 사용해 프로퍼티를 읽으려고 할 때 실행
    return this._age; // _age는 class안에서만 쓰이고 밖에서 사용하지 않도록!
  }

  set age(value) {
    // 값을 설정, 즉 값을 받아와야 함
    // User.age = value로 프로퍼티에 값을 할당하려 할때 실행
    // if (value < 0) {
    // throw Error ('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);
// user1을 선언하면서 steve job -1을 각각 인자로 class에 전달하면
// 각각의 dataproperty에 이름은 저장되고
// user1.age = -1이 되면서 setter를 호출
// 조건에 의해서 this._age = 0으로 값이 할당
// 외부에서 user1.age를 실행 시 getter가 실행되서 user1._age값을 리턴해서
// 사용자는 user1.age 값으로 0을 출력받게 됨

// 3. Fields (public, private)
// Too soon!
//
class Experiment {
  // 생성자 없이 field 생성
  publicField = 2; // 클래스 내/외부에서 값을 읽거나 변경가능
  #privateField = 0; // 클래스 외부에서는 값을 읽거나 변경불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //class외부에서는 읽으면 undefined

// 4. static properties and methods
// Too soon!
// 새로운 object가 만들어지는 것과 상관없이 class가 가지고 있는 고유한 값
// 데이터와 상관없이 동일하게 반복적으로 사용되는 method
// static을 이용하면 object에 할당되는 값이 아니라
// class 자체에 할당되는 값
// e.g. ClassName.property의 형태로 사용할 수 있음
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangular extends Shape {}
// extends를 이용하면 Shape에서 정한 field와 method가 자동으로 포함
class Triangle extends Shape {
  // overriding
  // 필요한 부분만 수정
  // 더이상 상속받은 부분이 호출되지 않음
  getArea() {
    return (this.width * this.height) / 2;
  }

  draw() {
    super.draw(); // 상속받는 부모의 draw함수 호출가능
    console.log("세모");
  }
}

const rectangular = new Rectangular(20, 20, "blue");
rectangular.draw();
const triangle = new Triangle(20, 20, "red");
triangle.draw();

// 6. class checking: instanceOf
// 왼쪽의 object가 오른쪽의 class를 이용해 만들어진지를 확인
// true/ false 출력
console.log(rectangular instanceof Rectangular);
console.log(triangle instanceof Rectangular);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// * MDN reference 참조
