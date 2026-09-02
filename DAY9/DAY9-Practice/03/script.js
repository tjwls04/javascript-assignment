// 19일차 실습 내용
// // 03. 영화 목록 그리기

const TOKEN = "발급받은 토큰";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const movieList = document.querySelector("#movie-list");

// TODO 1. 실습 2의 카드 코드를 이 함수 안으로 옮깁니다
//         구조 분해 대상은 data.results[0]이 아니라 인자 movie입니다
//         완성된 카드를 return합니다

function createMovieCard(movie) {
  const { title, vote_average, poster_path } = movie; // 인자 movie 구조 분해 할당

  const cardBoxEl = document.createElement("div"); // 카드 박스 요소 생성
  cardBoxEl.className = "movie-card"; // 카드 박스 요소에 클래스 추가

  const posterEl = document.createElement("img"); // 포스터 요소 생성
  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`; // 포스터 경로 생성

  posterEl.src = poster_path // 포스터 경로가 있으면 포스터 경로를 사용, 없으면 대체 이미지 사용
    ? posterPath
    : "https://placehold.co/500x750?text=No+Image";
  posterEl.alt = title; // 포스터 요소에 제목 넣기

  const titleEl = document.createElement("h3"); // 제목 요소 생성
  titleEl.textContent = title; // 제목 요소에 제목 넣기

  const voteEl = document.createElement("p"); // 평점 요소 생성
  voteEl.textContent = `평점 ${vote_average}`; // 평점 요소에 평점 넣기

  cardBoxEl.append(posterEl, titleEl, voteEl); // 카드 박스 요소에 포스터, 제목, 평점 요소 추가

  return cardBoxEl; // 완성된 카드 박스 리턴
}

// TODO 2. movies 배열을 받아, forEach로 카드를 만들어 컨테이너에 붙입니다
// // 영화 목록은 순회하면서, 각각의 movie를 가지고 createMovieCard를 호출한 결과 값을 movieList에 append

function renderMovies(movies) {
  movies.forEach((movie) => {
    const card = createMovieCard(movie);

    movieList.append(card);
  });
}

async function getNowPlaying() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    options,
  );

  const data = await response.json();

  // TODO 3. renderMovies에 영화 배열을 전달합니다

  renderMovies(data.results); // 영화 배열 전달
}

getNowPlaying();
