import { requestUrl } from '@/utils/requests'

export const getContents = async () => {
  const [trending, topRated, actionMovies, comedyMovies] = await Promise.all([
    fetch(requestUrl.trending).then(async (res) => await res.json()),
    fetch(requestUrl.topRated).then(async (res) => await res.json()),
    fetch(requestUrl.actionMovies).then(async (res) => await res.json()),
    fetch(requestUrl.comedyMovies).then(async (res) => await res.json()),
  ])

  return {
    trending: trending.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
  }
}
