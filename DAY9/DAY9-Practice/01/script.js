// 19일차 실습 내용
// // 01. 첫 번째 영화 제목을 화면에 표시하기

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

  const titleEl = document.createElement("h2");
  titleEl.textContent = `${data.results[0].title}`;
  movieList.append(titleEl);

  console.log(data);
}

getNowPlaying();
