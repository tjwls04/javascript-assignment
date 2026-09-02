// 19일차 실습 내용
// // 02. 첫 번째 영화를 카드로 만들기

const TOKEN = "발급받은 토큰";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const movieList = document.querySelector("#movie-list");

async function getNowPlaying() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    options,
  );

  const data = await response.json();

  const { title, vote_average, poster_path } = data.results[0]; // 첫번째 영화 데이터 구조 분해 할당

  // TODO 1. div 요소를 만들고 className을 "movie-card"로 지정합니다

  const cardBoxEl = document.createElement("div"); // 카드 박스 요소 생성
  cardBoxEl.className = "movie-card"; // 카드 박스 요소에 클래스 추가

  // TODO 2. img 요소를 만듭니다

  const posterEl = document.createElement("img"); // 포스터 요소 생성
  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`; // 포스터 경로 생성

  posterEl.src = poster_path // 포스터 경로가 있으면 포스터 경로를 사용, 없으면 대체 이미지 사용
    ? posterPath
    : "https://placehold.co/500x750?text=No+Image";
  posterEl.alt = title; // 포스터 요소에 제목 넣기

  // TODO 3. h3 요소에 title을 넣습니다

  const titleEl = document.createElement("h3"); // 제목 요소 생성
  titleEl.textContent = title; // 제목 요소에 제목 넣기

  // TODO 4. p 요소에 `평점 ${vote_average}` 를 넣습니다

  const voteEl = document.createElement("p"); // 평점 요소 생성
  voteEl.textContent = `평점 ${vote_average}`; // 평점 요소에 평점 넣기

  // TODO 5. img, h3, p를 카드에 append하고, 카드를 컨테이너에 append합니다

  cardBoxEl.append(posterEl, titleEl, voteEl); // 카드 박스 요소에 포스터, 제목, 평점 요소 추가

  movieList.append(cardBoxEl); // 카드 박스 요소를 컨테이너에 추가
}

getNowPlaying();
