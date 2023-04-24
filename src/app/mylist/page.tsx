import type { NextPage } from 'next'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import MovieItem from '@/components/MovieItem'

const Mylist: NextPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 pb-5 text-white">
      <div className="m-auto w-[1000px]">
        {/* ヘッダ */}
        <Header />

        {/* メインコンテンツ */}
        <div className="mt-6">
          <Heading>マイリスト</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="RRR" />
            <MovieItem title="ヘレディタリー／継承" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mylist
