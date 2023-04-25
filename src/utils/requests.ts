const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'ja'

const requestUrl = {
  trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=${LANGUAGE}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
  actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=28`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=35`,
}

export default requestUrl
