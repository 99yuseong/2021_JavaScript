const title = document.querySelector("#title");
//  쿼리 셀렉터로 title이란 아이디룰 가진 요소를 title이라는 객체에 저장
const CLICKED_CLASS = "clicked";
// clicked 라는 값을 가진 객체 생성
function handleClicked() {
  const clickedClass = title.classList.contains(CLICKED_CLASS);
  // title.classList.contains > 메소드 중 하나로 title이란 요소가 가지는 클래스 중 ()안의 요소를 포함하는 가
  if (!clickedClass) {
    // 참(포함하지 않는다)
    title.classList.add(CLICKED_CLASS);
    // clicked라는 이름의 클래스를 하나 추가
  } else {
    title.classList.remove(CLICKED_CLASS);
    // clicked라는 이름의 클래스를 제거
  }
}

function init() {
  // 그냥 만든 함수
  title.addEventListener("click", handleClicked);
  // title에 click이란 이벤트가 발생하면 handleClicked 함수를 실행시켜라
}
init();
