// ========================================
// 실습 01
// Form 입력값을 JSON으로 변환하기
// ========================================

// ----------------------------------------
// 요구사항 1
// 필요한 HTML 요소를 가져오세요.
//
// 가져와야 하는 요소
// - #movie-form
// - #title
// - #rating
// - #language
// - #json-output
//
// 힌트
// document.querySelector()
// ----------------------------------------

// 요구사항 1 아래에 작성하세요.

const movieForm = document.querySelector("#movie-form");
const movieTitle = document.querySelector("#title");
const movieRating = document.querySelector("#rating");
const movieLanguage = document.querySelector("#language");
const jsonOutput = document.querySelector("#json-output");

// ----------------------------------------
// 요구사항 2
// movie-form에서 submit Event가 발생했을 때
// 아래 작업이 실행되도록 Event를 등록하세요.
//
// 힌트
// addEventListener("submit", ...)
//

// 요구사항 3
// Form을 제출하면 페이지가 새로고침됩니다.
//
// event.preventDefault()를 사용하여
// Form의 기본 제출 동작을 막으세요.

// 요구사항 4
// 각각의 입력 요소에서 사용자가 입력한 값을 가져오세요.
//
// 필요한 값
// - 영화 제목
// - 평점
// - 언어
//
// 힌트
// input.value
//
// 주의
// input의 value는 기본적으로 문자열입니다.
// 평점은 Number()를 사용하여 숫자로 변환하세요.
//

// 요구사항 5
// 가져온 값을 이용하여 다음 형태의
// JavaScript 객체를 만드세요.
//
// {
//   title: "Inception",
//   vote_average: 8.4,
//   original_language: "en"
// }
//
// 변수 이름은 movie로 작성하세요.
//

// 요구사항 6
// movie 객체를 JSON 문자열로 변환하세요.
//
// JSON.stringify()를 사용합니다.
//
// 변환한 결과는 movieJson 변수에 저장하세요.
//

// 요구사항 7
// 만들어진 JSON 문자열을
// #json-output 요소에 출력하세요.
//
// 힌트
// textContent
// ----------------------------------------

// 요구사항 2~7 아래에 작성하세요.

movieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = movieTitle.value;
  const rating = movieRating.value;
  const language = movieLanguage.value;

  const movie = {
    title: title,
    vote_average: rating,
    original_language: language,
  };

  const movieJson = JSON.stringify(movie);

  jsonOutput.textContent = movieJson;
});
