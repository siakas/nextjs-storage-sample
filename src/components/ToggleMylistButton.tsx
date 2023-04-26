import type { FC } from 'react'
import type { Movie } from '@/types/movies'
import { Check, Plus } from 'react-feather'
import { useRecoilState } from 'recoil'
import { mylistState } from '@/state/atom'

type ToggleMylistButtonProps = {
  movie: Movie
}

const ToggleMylistButton: FC<ToggleMylistButtonProps> = ({ movie }) => {
  const [mylist, setMylist] = useRecoilState(mylistState)

  // ボタンが受け取った movie が mylist にすでに存在するかどうかを判定
  const isMovieInMylist = mylist.some((item) => item.id === movie.id)

  // ボタンのクリックイベントハンドラ
  const handleClick = () => {
    // movie が mylist に存在する場合
    if (isMovieInMylist) {
      // mylist から指定した映画を削除
      // mylist に含まれる映画の id と一致しないものを抽出してセット（＝一致するものを除外）
      setMylist(mylist.filter((item) => item.id !== movie.id))
    } else {
      // mylist に指定した映画を追加
      setMylist([...mylist, movie])
    }
  }

  return (
    <button
      className="absolute bottom-[6px] right-[6px] rounded-full bg-gray-900 bg-opacity-80 p-2 shadow-lg"
      onClick={handleClick}
    >
      {isMovieInMylist ? <Check /> : <Plus />}
    </button>
  )
}

export default ToggleMylistButton
