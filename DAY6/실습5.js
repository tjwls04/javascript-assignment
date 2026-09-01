// 16일차 실습 내용
// // JS 영화 데이터

const reviewData = {
  movieId: 27205,
  movieTitle: "Inception",
  author: "MovieBuff",
  reviewDetail: {
    rating: 9.5,
    comment: "꿈속의 꿈, 최고의 명작입니다.",
    containsSpoiler: false,
  },
};

// 실습1 미션 : JSON으로 변환해서, 변환 결과의 타입을 콘솔에 출력하기

const text = JSON.stringify(reviewData);
console.log(typeof text);

// JSON 영화 검색 결과 데이터
// 1. GET https://api.themoviedb.org/3/search/movie 엔드포인트로 요청을 보냄
// 2. 서버에서 Response 회신
// 3. body에 검색 결과 데이터가 담겨있음
const rawResponse =
  '{"page":1,"total_results":2,"results":[{"id":27205,"title":"Inception","vote_average":8.4,"detail":{"director":"Christopher Nolan","runtime":148}},{"id":157336,"title":"Interstellar","vote_average":8.7,"detail":{"director":"Christopher Nolan","runtime":169}}]}';
// 4. 자바스크립트로 변환해서, 결과와 결과의 타입을 콘솔에 출력하기
const searchResult = JSON.parse(rawResponse);
console.log(searchResult);
console.log(typeof searchResult);