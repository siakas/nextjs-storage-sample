'use client'

import type { FC } from 'react'
import type { Movie } from '@/types/movies'
import Heading from '@/components/Heading'
import MovieItem from '@/components/MovieItem'

type MovieListProps = {
  movies: Movie[]
  title: string
}

const MovieList: FC<MovieListProps> = ({ movies, title }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <div className="mb-20 grid grid-cols-5 gap-x-2 gap-y-6">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default MovieList
