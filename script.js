// 로그인 기능 구현

function login() {
  const id = document.getElementById("username").value;
  const pw = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (id === "sungjoon" && pw === "dhvmsthtm") {
    // 로그인 성공 → home.html로 이동
    window.location.href = "home.html";
  } else {
    // 로그인 실패 → 에러 메시지 표시
    error.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
}

// 로그인 버튼 클릭 시 login() 실행
document.getElementById("login-btn").addEventListener("click", login);

// -----------------------------
//   메뉴 클릭 시 화면 전환 기능이다
// -----------------------------

const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".content-section");

// 메뉴 클릭하면 실행되는 함수
menuItems.forEach(item => {
  item.addEventListener("click", () => {

    // 모든 메뉴 active 제거
    menuItems.forEach(m => m.classList.remove("active"));
    // 클릭한 메뉴에 active 추가
    item.classList.add("active");

    // 모든 content-section 숨기기
    sections.forEach(sec => sec.classList.remove("active"));

    // 클릭한 메뉴와 동일한 id를 가진 콘텐츠 보여주기
    const target = item.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});
