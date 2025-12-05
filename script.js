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
   🎵 BGM 재생 컨트롤
=============================== */
const bgm = document.getElementById("bgm");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", () => {
  bgm.play();
  playBtn.classList.add("active");
  pauseBtn.classList.remove("active");
});

pauseBtn.addEventListener("click", () => {
  bgm.pause();
  pauseBtn.classList.add("active");
  playBtn.classList.remove("active");
});


/* ===============================
   📌 페이지 탭 전환 (홈/다이어리/사진첩/방명록)
=============================== */
const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");
const contentTitle = document.querySelector(".content-title");
const contentDate = document.querySelector(".content-date");

function showSection(target) {
  // 모든 섹션 숨기기
  contentSections.forEach(sec => sec.classList.remove("active"));

  // 해당 섹션 보여주기
  const section = document.getElementById(target);
  if (section) section.classList.add("active");

  // 제목 변경
  const titles = {
    home: "홈",
    diary: "다이어리",
    photo: "사진첩",
    guestbook: "방명록"
  };
  contentTitle.textContent = titles[target];

  // 날짜 표시 (오늘 날짜)
  const today = new Date();
  contentDate.textContent =
    `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,"0")}.${String(today.getDate()).padStart(2,"0")}`;
}

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // 메뉴 active 변경
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const target = item.dataset.target;
    showSection(target);
  });
});

showSection("home"); // 처음 로딩 시 홈 활성화


/* ===============================
   📝 방명록 기능
=============================== */
const guestForm = document.getElementById("guestbook-form");
const guestList = document.getElementById("guestbook-list");

guestForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("guest-name").value.trim();
  const message = document.getElementById("guest-message").value.trim();

  if (!name || !message) return;

  const item = document.createElement("div");
  item.classList.add("guestbook-item");

  const today = new Date();
  const dateStr =
    `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,"0")}.${String(today.getDate()).padStart(2,"0")}`;

  item.innerHTML = `
    <div class="guestbook-meta">${name} | ${dateStr}</div>
    <div class="guestbook-text">${message}</div>
  `;

  guestList.prepend(item);

  guestForm.reset();
});



