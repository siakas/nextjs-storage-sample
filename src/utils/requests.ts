const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'ja'

const requestUrl = {
  actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=28`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=35`,
  horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=27`,
  romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=10749`,
  documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=99`,
}

export default requestUrl
