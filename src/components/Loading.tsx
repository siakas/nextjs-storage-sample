import type { FC } from 'react'

type LoadingProps = {
  isLoading: boolean
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-zinc-100 transition-opacity duration-500 dark:bg-zinc-900 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-20 w-20 animate-spin rounded-full border-8 border-blue-500 border-t-transparent"></div>
    </div>
  )
}

export default Loading
