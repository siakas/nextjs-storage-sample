import type { NextPage } from 'next'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import MovieItem from '@/components/MovieItem'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 pb-5 text-white">
      <div className="m-auto w-[1000px]">
        {/* ヘッダ */}
        <Header />

        {/* メインコンテンツ */}
        <div className="mt-6">
          <Heading>アクション</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="フリーガイ" />
            <MovieItem title="浅草キッド" />
            <MovieItem title="RRR" />
            <MovieItem title="エブリシング・エブリウェア・オール・アット・ワンス" />
            <MovieItem title="ヘレディタリー／継承" />
          </div>

          <Heading>コメディ</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="フリーガイ" />
            <MovieItem title="浅草キッド" />
            <MovieItem title="RRR" />
            <MovieItem title="エブリシング・エブリウェア・オール・アット・ワンス" />
            <MovieItem title="ヘレディタリー／継承" />
          </div>

          <Heading>ホラー</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="フリーガイ" />
          </div>

          <Heading>恋愛</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="フリーガイ" />
          </div>

          <Heading>ドキュメンタリー</Heading>
          <div className="mb-16 grid grid-cols-5 gap-x-2 gap-y-8">
            <MovieItem title="ドライブ・マイ・カー" />
            <MovieItem title="孤狼の血" />
            <MovieItem title="フリーガイ" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
