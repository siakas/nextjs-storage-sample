import type { NextPage } from 'next'
import type { ChangeEvent } from 'react'
import { orderBy } from 'lodash-es'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue'
import { useLoading } from '@/hooks/useLoading'
import { mylistState, sortState } from '@/state/atom'
import Loading from '@/components/Loading'
import MovieList from '@/components/MovieList'

const MylistPage: NextPage = () => {
  const mylist = useClientSideRecoilValue(mylistState, [])
  const isLoading = useLoading()
  const [sortOption, setSortOption] = useRecoilState(sortState)
  const [sortedMylist, setSortedMylist] = useState(mylist)

  useEffect(() => {
    setSortedMylist(
      orderBy(
        mylist,
        [
          (movie) => {
            return sortOption === 'default' ? undefined : movie[sortOption]
          },
        ],
        ['desc']
      )
    )
  }, [mylist, sortOption])

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value)
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="mt-6">
        <div className="mb-4 text-right">
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="default">マイリストへの追加順</option>
            <option value="popularity">話題の勢い順</option>
            <option value="vote_average">評価の高い順</option>
            <option value="vote_count">得票数の多い順</option>
          </select>
        </div>

        {mylist.length !== 0 ? (
          <MovieList movies={sortedMylist} title="マイリスト" />
        ) : (
          <p className="text-2xl">マイリストに追加された作品はありません</p>
        )}
      </div>
    </>
  )
}

export default MylistPage
