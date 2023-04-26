import type { FC } from 'react'
import type { Movie } from '@/types/movies'
import ToggleMylistButton from '@/components/ToggleMylistButton'

type MovieItemProps = {
  movie: Movie
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <div data-box="griditem">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie?.title ?? movie?.name ?? ''}
          className="block aspect-[2/3] w-full rounded-md object-cover"
          loading="lazy"
        />
        <ToggleMylistButton movie={movie} />
      </div>
      <p className="p-2 text-sm font-bold leading-normal">
        {movie?.title ?? movie?.name ?? ''}
      </p>
      {/* <p className="text-xs">
        人気指数：{movie.popularity}
        <br />
        評価レート：{movie.vote_average}
        <br />
        票数：{movie.vote_count}
      </p> */}
    </div>
  )
}

export default MovieItem
