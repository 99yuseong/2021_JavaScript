// DOM(문서 객체 모델 - Document Object Model)
// Html과 JS의 연결은 단순히 script 태그로 연결하면 끝?
// JS로 html과 css를 변환하기 위해서는 html파일을 객체로 변환해줘서
// 즉 각 attribute와 text를 객체화 해서 자바스크립트에서 동적으로 변경할 수 있게된다
// 이렇게 만들어진 부모 형제로 나타나지는 구조적인 DOM Tree를 얻을 수 있다

// 구성은
// 문서 노드(Document Node)
// 요소 노드(element Node)
// 어트리뷰트 노드(Attribute Node)
// 텍스트 노드(Text Node)

// 어떻게 JS에서 html 태그? 요소? 들로 접근할 것인가??
// 혹은 css attribute 값을 수정할 것인가??

// 1. 하나의 노드 선택 방식
// document.getElementById(id)
// id를 이용해 특정 요소를 선택하는 방식
// cosnt elem = document.getElementById("myId");
// elem이라는 변수에 Myid라는 id를 가지는 요소를 저장
// elem.className
// eleme.style.color
// 등등으로 각각의 요소에 해당하는 값들을 능동적으로 변환가능
