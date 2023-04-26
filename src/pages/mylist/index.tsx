import type { NextPage } from 'next'
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue'
import { mylistState } from '@/state/atom'
import MovieList from '@/components/MovieList'

const MylistPage: NextPage = () => {
  const mylist = useClientSideRecoilValue(mylistState, [])

  return (
    <div className="mt-6">
      <MovieList movies={mylist} title="マイリスト" />
    </div>
  )
}

export default MylistPage
