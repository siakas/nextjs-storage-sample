'use client'

import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import requestUrl from '@/utils/requests'
import Header from '@/components/Header'
import MovieList from '@/components/MovieList'

const Home: NextPage = () => {
  const [movie, setMovie] = useState({
    trending: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      setIsLoading(true)

      const [trending, topRated, actionMovies, comedyMovies] =
        await Promise.all([
          fetch(requestUrl.trending).then(async (res) => await res.json()),
          fetch(requestUrl.topRated).then(async (res) => await res.json()),
          fetch(requestUrl.actionMovies).then(async (res) => await res.json()),
          fetch(requestUrl.comedyMovies).then(async (res) => await res.json()),
        ])

      setMovie((prev) => ({
        ...prev,
        trending: trending.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
      }))

      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log('🚀 ~ file: page.tsx:28 ~ fetchData ~ error:', error)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <>
      {/* ヘッダ */}
      <Header />

      {/* メインコンテンツ */}
      <div className="mt-6">
        {movie !== undefined && (
          <>
            <MovieList movies={movie.trending} title="人気の映画" />
            <MovieList movies={movie.topRated} title="評価の高い映画" />
            <MovieList movies={movie.actionMovies} title="アクション" />
            <MovieList movies={movie.comedyMovies} title="コメディ" />
          </>
        )}
      </div>
    </>
  )
}

export default Home
