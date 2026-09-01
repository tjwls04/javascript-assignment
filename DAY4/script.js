// 14일차 과제
// // 02.

const btn = document.querySelector("#recommend-button");
const result = document.querySelector("#recommend-result");

btn.addEventListener("click", () => {
  result.textContent = "오늘의 추천 영화는 인셉션입니다."; // 텍스트 추가
});

// // 03.
// // 04.

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 새로고침 막기

  const value = input.value.trim();

  if (value === "") {
    return;
  }
  searchResult.textContent = `검색한 영화: ${value}`;

  // // 05.
  input.value = "";
});

// // 06.

const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
];

// // 07.

movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}입니다.`);
});

const list = document.querySelector("#movie-list");

movies.forEach((movie) => {
  const item = document.createElement("li");
  item.textContent = movie.title;
  list.append(item);
});
