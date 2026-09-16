const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const container = document.querySelector("#movie-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = input.value.trim();

  if (!keyword) {
    return;
  }

  searchMovies(keyword);
});

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

async function searchMovies(keyword) {
  const encodedKeyword = encodeURIComponent(keyword);

  const url = `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=ko-KR`;

  const response = await fetch(url, options);

  const data = await response.json();

  container.textContent = "";
  renderMovies(data.results);
}
