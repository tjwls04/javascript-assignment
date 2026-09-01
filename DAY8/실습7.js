// 18일차 실습 내용
// // fetch 실행 결과(요청에 대한 응답) 직접 관찰하기 실습

const TOKEN = "";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const result = fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
  options,
);

console.log(result); // Promise { <pending> }

// // async/await로 응답 받아오기 실습

async function getNowPlaying() {
  const responce = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    options,
  );

  // // 응답 데이터의 구조 탐색하기

  const data = await responce.json();

  console.log(data);
  console.log(data.results);
  console.log(data.results[0]);
  console.log(data.results[0].title);

  // // 구조 분해로 첫 번째 영화 정리하기

  const firstMovie = data.results[0];
  const { title, vote_average, release_date, overview } = firstMovie;

  console.log(
    `제목: ${title} / 평점: ${vote_average} / 개봉일: ${release_date} / 줄거리: ${overview ?? "줄거리 정보 없음"}`,
  );

  // // 평점 높은 영화만 골라 출력하기

  const titles = data.results.map((movie) => movie.title);
  console.log(titles);

  const topAverage = data.results.filter((movie) => movie.vote_average >= 8);

  topAverage.forEach((movie) => {
    console.log(`${movie.title} (${movie.vote_average})`);
  });
}

getNowPlaying();
