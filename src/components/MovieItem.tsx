'use client'

import type { FC } from 'react'
import type { Movie } from '@/types/movies'
import Image from 'next/image'
import { Plus } from 'react-feather'

type MovieItemProps = {
  movie: Movie
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <div data-box="griditem">
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie?.title ?? movie?.name ?? ''}
          className="block aspect-[2/3] w-full rounded-md object-cover"
          width={500}
          height={500}
          loading="lazy"
        />
        <button className="absolute bottom-[6px] right-[6px] rounded-full bg-gray-900 bg-opacity-80 p-2 shadow-lg">
          <Plus />
        </button>
      </div>
      <p className="p-2 text-sm font-bold leading-normal">
        {movie?.title ?? movie?.name ?? ''}
      </p>
    </div>
  )
}

export default MovieItem
