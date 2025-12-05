/* ===============================
    1. 로그인 기능
=============================== */

function login() {
  const id = document.getElementById("username");
  const pw = document.getElementById("password");
  const error = document.getElementById("login-error");

  // 로그인 페이지가 아닐 때는 실행 안 함
  if (!id || !pw || !error) return;

  if (id.value === "sungjoon" && pw.value === "dhvmsthtm") {
    window.location.href = "home.html";
  } else {
    error.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
}

// 로그인 버튼이 있을 때만 이벤트 등록
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", login);
}


/* ===============================
    2. 메뉴 클릭 시 화면 전환
=============================== */

const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".content-section");

if (menuItems.length > 0) {
  menuItems.forEach(item => {
    item.addEventListener("click", () => {

      // 모든 메뉴에서 active 제거
      menuItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");

      // 모든 섹션 숨기기
      sections.forEach(sec => sec.classList.remove("active"));

      // 타겟 화면 보여주기
      const target = item.getAttribute("data-target");
      const targetSection = document.getElementById(target);

      if (targetSection) {
        targetSection.classList.add("active");

        // 상단 제목도 변경
        const title = document.querySelector(".content-title");
        if (title) title.textContent = item.textContent.trim();
      }
        document.querySelector(".content-section.active")?.scrollTo(0, 0);
    });
  });
}


/* ===============================
    3. 오늘 날짜 자동 표시
=============================== */

function setTodayDate() {
  const dateBox = document.querySelector(".content-date");
  if (!dateBox) return;

  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");

  dateBox.textContent = `${y}.${m}.${d}`;
}

setTodayDate();


/* ===============================
    4. 방명록 기능
=============================== */

const guestForm = document.getElementById("guestbook-form");
const guestList = document.getElementById("guestbook-list");

if (guestForm) {
  guestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("guest-name").value;
    const message = document.getElementById("guest-message").value;

    if (!name || !message) return;

    const entry = document.createElement("div");
    entry.classList.add("guestbook-item");

    entry.innerHTML = `
      <p class="guestbook-meta"><strong>${name}</strong></p>
      <p class="guestbook-text">${message.replace(/\n/g, "<br>")}</p>
    `;

    guestList.prepend(entry);
    guestForm.reset();
  });
}


/* ===============================
    5. BGM 기능
=============================== */

// 오디오 객체 생성
let bgm = new Audio("bgm.mp3");
bgm.loop = true;

const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

// 재생 버튼
if (playBtn) {
  playBtn.addEventListener("click", () => {
    bgm.play();
    playBtn.classList.add("active");
    pauseBtn.classList.remove("active");
  });
}

// 일시정지 버튼
if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    bgm.pause();
    pauseBtn.classList.add("active");
    playBtn.classList.remove("active");
  });
}
