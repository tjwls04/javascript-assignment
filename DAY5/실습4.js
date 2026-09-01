// 15일차 실습 내용
// // 영화 데이터 검색 및 가공

const movies = [
  { id: 1, title: "Inception", voteAverage: 8.4 },
  { id: 2, title: "Interstellar", voteAverage: 8.7 },
  { id: 3, title: "The Dark Knight", voteAverage: 9.0 },
];

const movieFind = movies.find((find) => find.id === 2);

console.log(movieFind);

const movieFilter = movies.filter((filter) => {
  return filter.voteAverage >= 8.5;
});

console.log(movieFilter);

const movieTitle = movieFilter.map((title) => {
  return title.title;
});
