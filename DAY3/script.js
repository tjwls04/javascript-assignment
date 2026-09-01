// 11일차 실습 내용
// // 변수와 자료형

// const serviceName = "AI Store";
// const price = 39000;
// const isLoggedIn = true;
// let shoppingCart = 2;

// console.log(serviceName);
// console.log(price);
// console.log(isLoggedIn);
// console.log(shoppingCart);

// shoppingCart = 3;
// console.log(shoppingCart);

// 11일차 과제

// const title = "인터스텔라";
// const voteAverage = 8.7;
// const voteCount = 32000;
// const popularity = 150.5;
// const releaseDate = "2014-11-05";
// const originalLanguage = "en";

// console.log(title);
// console.log(voteAverage);
// console.log(voteCount);
// console.log(popularity);
// console.log(releaseDate);
// console.log(originalLanguage);

// const additionalVoteCount = 100;

// console.log(voteCount + additionalVoteCount);

// const genre = "SF";
// const category = "영화";

// console.log(genre + " " + category);

// console.log("영화 제목: " + title);
// console.log("평점: " + voteAverage);
// console.log("개봉일: " + releaseDate);

// console.log(
//   `${title}는 ${releaseDate}에 개봉한 영화이며, 현재 평점은 ${voteAverage}이고, ${voteCount}명이 평가했습니다.`,
// );

// 12일차 실습 내용
// // 연산자와 조건문

// const isMember = true;
// const totalPrice = 30000;

// if (isMember && totalPrice >= 30000) {
//   console.log("회원 혜택 적용");
// } else if (isMember) {
//   console.log("기본 회원 혜택 적용");
// } else {
//   console.log("일반 예매");
// }

// // 배열과 객체 설계

// const movieTitles = ["스파이더맨", "오디세이", "호프"];

// const movies = [
//   {
//     id: 0,
//     title: "스파이더맨",
//     voteAverage: 8.2,
//     releaseDate: "2026-07-28",
//   },
//   {
//     id: 1,
//     title: "오디세이",
//     voteAverage: 9.0,
//     releaseDate: "2026-08-02",
//   },
//   {
//     id: 2,
//     title: "호프",
//     voteAverage: 7.8,
//     releaseDate: "2026-07-15",
//   },
// ];

// console.log(movies[1].title);
// console.log(movies[2].voteAverage);

// // 반복문 for, for of

// const movies = [
//   {
//     id: 0,
//     title: "스파이더맨",
//     voteAverage: 8.2,
//     releaseDate: "2026-07-28",
//   },
//   {
//     id: 1,
//     title: "오디세이",
//     voteAverage: 9.0,
//     releaseDate: "2026-08-02",
//   },
//   {
//     id: 2,
//     title: "호프",
//     voteAverage: 7.8,
//     releaseDate: "2026-07-15",
//   },
// ];

// for (const movie of movies) {
//   if (movie.voteAverage >= 8) {
//     console.log(movie.title);
//   }
// }

// 12일차 과제
// // 01.

// const movie = {
//   id: 1,
//   title: "인셉션",
//   voteAverage: 8.4,
//   voteCount: 35000,
//   releaseDate: "2010-07-15",
//   isFavorite: false,
// };

// console.log(movie.title);
// console.log(movie.voteAverage);
// console.log(movie.isFavorite);

// // // 02.

// if (movie.voteAverage >= 8) {
//   console.log("추천 영화");
// } else {
//   console.log("일반 영화");
// }

// // // 03.

// if (movie.voteAverage >= 8 && movie.voteCount >= 30000) {
//   console.log("인기 추천 영화");
// } else {
//   console.log("일반 영화");
// }

// // // 04.

// const favoriteButtonText = movie.isFavorite ? "찜 해제" : "찜하기";

// console.log(favoriteButtonText);

// // // 05.

// const movies = [
//   {
//     id: 1,
//     title: "인셉션",
//     voteAverage: 8.4,
//     releaseDate: "2010-07-15",
//   },
//   {
//     id: 2,
//     title: "인터스텔라",
//     voteAverage: 8.7,
//     releaseDate: "2014-11-05",
//   },
//   {
//     id: 3,
//     title: "테넷",
//     voteAverage: 7.3,
//     releaseDate: "2020-08-26",
//   },
// ];

// // // 06.

// console.log(movies[0].title);
// console.log(movies[1].voteAverage);
// console.log(movies[2].releaseDate);
// console.log(movies.length);

// // // 07.
// // // 1)

// movies[0].voteAverage = 8.5;

// console.log(movies[0].voteAverage);

// // // 2)

// movies.push({
//   id: 4,
//   title: "다크 나이트",
//   voteAverage: 9.0,
//   releaseDate: "2008-07-16",
// });

// console.log(movies.length);

// 13일차 실습 내용
// // 함수

function calculateTicketPrice(price, count) {
  return price * count;
}

const totalPrice = calculateTicketPrice(15000, 5);

console.log(totalPrice);

// // DOM
// // => 실습1.html 실습1.js 확인 //

// const movieList = document.querySelector("#movie-list");

// const card = document.createElement("div");
// card.textContent = "인셉션";
// card.classList.add("card");

// movieList.append(card);

// 13일차 과제
// 02.

const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
}; // 함수 만들기

// 03.

const message = getMovieMessage("인셉션", 8.4); // 함수의 반환값 변수 저장

console.log(message); // 콘솔 출력

// 04.

const title = document.querySelector(".title"); // 요소 선택

title.textContent = "오늘의 추천 영화"; // 텍스트 변경

// 05.

const description = document.querySelector(".description"); // 요소 선택

description.classList.add("text-primary", "fw-bold"); // 클래스 추가

// 06.

const movieList = document.querySelector("#movie-list"); // 요소 선택

const movie = document.createElement("div"); // 요소 추가

movie.textContent = message; // 텍스트 추가
movie.classList.add("border", "rounded", "p-3", "mb-2"); //클래스 추가

movieList.append(movie); // movieList에 새로 만든 요소 추가

// 07.

const message1 = getMovieMessage("인터스텔라", 8.7); // 함수의 반환값 변수 저장

const movie1 = document.createElement("div"); // 요소 추가

movie1.textContent = message1; // 텍스트 추가
movie1.classList.add("border", "rounded", "p-3", "mb-2"); //클래스 추가

movieList.append(movie1); // movieList에 새로 만든 요소 추가ㅌ

// 08.

movie1.remove(); // 인터스텔라 요소 삭제

// 14일차 실습 내용
// EVENT 

