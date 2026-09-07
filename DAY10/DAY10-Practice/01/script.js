// 실습 1) 404를 관찰하고 Error 상태 만들기

const options = {
  headers: {
    Authorization: `Bearer ${1233123}`,
  },
};

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  const { title, vote_average, poster_path } = movie;

  const card = document.createElement("div");
  card.className = "movie-card";

  const poster = document.createElement("img");
  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
  poster.alt = title;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderMovies(movies) {
  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}

async function getNowPlaying() {
  container.textContent = "영화 목록을 불러오는 중...";

  // TODO 02. fetch 실패 상황 재현하여 error catch 하기

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playin?language=ko-KR",
      options,
    );

    // TODO 01. response.ok가 false면 "영화 정보를 불러오지 못했습니다." 표시 후 return

    if (!response.ok) {
      container.textContent = "영화 정보를 불러오지 못했습니다.";
      return;
    }

    const data = await response.json();

    container.textContent = "";

    renderMovies(data.results);
  } catch (error) {
    container.textContent = "안내 문구";
    console.error(error);
  }
}

getNowPlaying();
