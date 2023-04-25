import type { NextPage } from 'next'
import Header from '@/components/Header'
import Heading from '@/components/Heading'

const Mylist: NextPage = () => {
  return (
    <>
      {/* ヘッダ */}
      <Header />

      {/* メインコンテンツ */}
      <div className="mt-6">
        <Heading>マイリスト</Heading>
        <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
          {/* <MovieItem title="ドライブ・マイ・カー" />
          <MovieItem title="孤狼の血" />
          <MovieItem title="RRR" />
          <MovieItem title="ヘレディタリー／継承" /> */}
        </div>
      </div>
    </>
  )
}

export default Mylist
