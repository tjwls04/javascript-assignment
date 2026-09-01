// 17일차 과제
// // 01. 객체 구조 분해 할당하기

const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

const { title, vote_average } = movie;

console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);

// // 02. 새로운 변수 이름으로 할당하기

const { title: movieTitle } = movie;

console.log(movieTitle);

// // 03. 배열 구조 분해 할당하기

const [firstGenre, secondGenre] = genres;

console.log(firstGenre);
console.log(secondGenre);

// // 04. 존재하지 않는 속성 안전하게 가져오기

const director = movie?.director;

console.log(director);

// // 05. 기본값 사용하기

const directorName = movie?.director ?? "감독 정보 없음";

console.log(directorName);

// // 06. ||와 ??의 차이 확인하기

const { vote_count } = movie;

console.log(vote_count || 100);
console.log(vote_count ?? 100);
