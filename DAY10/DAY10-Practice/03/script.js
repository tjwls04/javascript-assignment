const options = {
  headers: {
    Authorization: `Bearer ${123131}`,
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

  try {
    const response = await fetch(
      "https://api.themoviedb.orgx/3/movie/now_playing?language=ko-KR",
      options,
    );

    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    const data = await response.json();

    container.textContent = "";

    renderMovies(data.results);
  } catch (error) {
    container.textContent = error.message;
    console.log(error);
  }
}

getNowPlaying();
