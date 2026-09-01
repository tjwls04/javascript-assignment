// 17일차 실습 내용
// // 구조 분해 할당

// const movies = [
//   {
//     id: 101,
//     title: "Inception",
//     vote_average: 8.4,
//     release_date: "2010-07-16",
//   },
//   {
//     id: 102,
//     title: "Interstellar",
//     vote_average: 8.7,
//     release_date: "2014-11-05",
//   },
//   {
//     id: 103,
//     title: "The Dark Knight",
//     vote_average: 9.0,
//     release_date: "2008-07-18",
//   },
// ];

// const [firstMovie, secondMovie] = movies;
// const { title, vote_average, release_date } = firstMovie;

// console.log(`제목: ${title}`);
// console.log(`평점: ${vote_average}`);
// console.log(`개봉일: ${release_date}`);

// const { title: secondTitle, vote_average: secondVoteAverage } = secondMovie;

// console.log(secondTitle);
// console.log(secondVoteAverage);

// const [, , thirdMovie] = movies;

// console.log(thirdMovie.title);

// // 옵셔널 체이닝

const movie = {
  title: "Inception",
  detail: {
    director: "Christopher Nolan",
  },
};
const director = movie.detail?.director;
console.log(director);

// // 데이터 찾기

const data = {
  page: 1,
  results: [
    {
      id: 101,
      title: "Inception",
      vote_average: 8.4,
      release_date: "2010-07-16",
    },
    {
      id: 102,
      title: "Interstellar",
      vote_average: 8.7,
      release_date: "2014-11-05",
    },
    {
      id: 103,
      title: "The Dark Knight",
      vote_average: 9.0,
      release_date: "2008-07-18",
    },
    {
      id: 104,
      title: "Tenet",
      vote_average: 7.3,
      release_date: "2020-08-26",
    },
  ],
};

const movies = data.results;

const firstMovie = movies[0];
const { title, vote_average, release_date } = firstMovie;

console.log(`제목: ${title} / 평점: ${vote_average} / 개봉일: ${release_date}`);

const foundMovie = movies.find((movie) => movie.id === 102);

console.log(foundMovie);
