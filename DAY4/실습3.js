// 14일차 실습 내용
// // Form과 사용자 입력

const movieForm = document.querySelector("#movie-form");
const movieTitle = document.querySelector("#movie-title");
const movieList = document.querySelector("#movie-list");

movieForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 새로고침 막기

  const value = movieTitle.value.trim(); // 입력 값 가져오기

  if (value !== "") {
    // 빈 값이 아니라면
    const item = document.createElement("li"); // 요소 생성
    item.textContent = value; // 값을 텍스트로 지정
    movieList.append(item); // 리스트에 요소 삽입

    movieTitle.value = ""; // 입력 창 빈 값으로 변경
  }
});

// // 내장 객체

const movies = [
  { id: 1, title: "인셉션", voteAverage: 8.4 },
  { id: 2, title: "인터스텔라", voteAverage: 8.7 },
  { id: 3, title: "다크 나이트", voteAverage: 9.0 },
];

// for..of문 break
for (const movie of movies) {
  if (movie.title === "인터스텔라") break; // 반복문 종료해줘
  console.log(`${movie.title} - 평점: ${movie.voteAverage}`);
}

// forEach: 각 요소 순회 (반환값 undefined)
movies.forEach((movie) => {
  // if (movie.title === "인터스텔라") break; // break문 사용 불가
  console.log(`${movie.title} - 평점: ${movie.voteAverage}`);
});

// for..of문 continue
for (const movie of movies) {
  if (movie.title === "인터스텔라") continue; // 건너 뛰기
  console.log(`${movie.title} - 평점: ${movie.voteAverage}`);
}

movies.forEach((movie) => {
  // if (movie.title === "인터스텔라") continue; // continue문 사용 불가
  console.log(`${movie.title} - 평점: ${movie.voteAverage}`);
});
