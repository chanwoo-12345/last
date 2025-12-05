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
