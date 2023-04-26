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
        <MovieList movies={mylist} title="マイリスト" />
      </div>
    </>
  )
}

export default MylistPage
