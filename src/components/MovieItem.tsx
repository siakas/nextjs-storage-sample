import type { FC } from 'react'
import { Plus } from 'react-feather'

type MovieItemProps = {
  title: string
}

const MovieItem: FC<MovieItemProps> = ({ title }) => {
  return (
    <div data-box="griditem">
      <div className="relative">
        <img
          src="https://placehold.jp/600x600.png"
          className="block aspect-[2/3] w-full rounded-[3px] object-cover"
          alt=""
        />
        <button className="absolute bottom-[6px] right-[6px] rounded-full bg-gray-600 bg-opacity-30 p-2 shadow-lg">
          <Plus />
        </button>
      </div>
      <p className="p-2 text-sm font-bold leading-normal">{title}</p>
    </div>
  )
}

export default MovieItem
