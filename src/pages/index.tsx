import type { NextPage } from 'next'
import type { Movie } from '@/types/movies'
import { useState, useEffect } from 'react'
import { getContents } from '@/utils/getContents'
import MovieList from '@/components/MovieList'

const Home: NextPage = () => {
  const [trending, setTrending] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [actionMovies, setActionMovies] = useState<Movie[]>([])
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchContents = async () => {
      const {
        trending: trendingData,
        topRated: topRatedData,
        actionMovies: actionMoviesData,
        comedyMovies: comedyMoviesData,
      } = await getContents()

      setTrending(trendingData)
      setTopRated(topRatedData)
      setActionMovies(actionMoviesData)
      setComedyMovies(comedyMoviesData)
    }

    void fetchContents()
  }, [])

  return (
    <div className="mt-6">
      <MovieList movies={trending} title="人気の映画" />
      <MovieList movies={topRated} title="評価の高い映画" />
      <MovieList movies={actionMovies} title="アクション" />
      <MovieList movies={comedyMovies} title="コメディ" />
    </div>
  )
}

export default Home
