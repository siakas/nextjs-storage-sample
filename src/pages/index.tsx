import type { GetServerSideProps, NextPage } from 'next'
import type { Movie } from '@/types/movies'
import { getContents } from '@/utils/getContents'
import MovieList from '@/components/MovieList'

type HomeProps = {
  trending: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
}

const Home: NextPage<HomeProps> = ({
  trending,
  topRated,
  actionMovies,
  comedyMovies,
}) => {
  return (
    <div className="mt-6">
      <MovieList movies={trending} title="人気の映画" />
      <MovieList movies={topRated} title="評価の高い映画" />
      <MovieList movies={actionMovies} title="アクション" />
      <MovieList movies={comedyMovies} title="コメディ" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { trending, topRated, actionMovies, comedyMovies } = await getContents()
  return {
    props: {
      trending,
      topRated,
      actionMovies,
      comedyMovies,
    },
  }
}

export default Home
