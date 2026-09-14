const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = input.value.trim();

  // TODO 1. 빈 검색어라면 return으로 함수 실행을 종료하세요.
  if (!keyword) {
    return;
  }

  searchMovies(keyword);
});

async function searchMovies(keyword) {
  // TODO 2. encodeURIComponent()로 검색어를 인코딩하고, 검색어를 query Parameter에 포함한 URL을 만듭니다.
  const encodedKeyword = encodeURIComponent(keyword);
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=ko-KR`;

  const response = await fetch(url, options);

  // TODO 3. 응답을 json()으로 변환하고
  const data = await response.json();

  // data.results를 console.log()로 출력하세요.
  console.log(data.results);
}
