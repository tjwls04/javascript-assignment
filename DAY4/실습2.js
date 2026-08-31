// 14일차 실습 내용
// // EVENT

const button = document.querySelector("#favorite-button");

button.addEventListener("click", () => {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "❤️ 찜 완료";
  } else {
    button.textContent = "🤍 찜";
  }
});
