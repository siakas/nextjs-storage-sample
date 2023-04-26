import type { NextPage } from 'next'
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue'
import { useLoading } from '@/hooks/useLoading'
import { mylistState } from '@/state/atom'
import Loading from '@/components/Loading'
import MovieList from '@/components/MovieList'

const MylistPage: NextPage = () => {
  const mylist = useClientSideRecoilValue(mylistState, [])
  const isLoading = useLoading()

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="mt-6">
        {mylist.length !== 0 ? (
          <MovieList movies={mylist} title="マイリスト" />
        ) : (
          <p className="text-2xl">マイリストに追加された作品はありません</p>
        )}
      </div>
    </>
  )
}

export default MylistPage
