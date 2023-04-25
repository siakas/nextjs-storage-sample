import type { FC } from 'react'

type LoadingProps = {
  isLoading: boolean
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-zinc-900 transition-all ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="loader h-20 w-20 rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
    </div>
  )
}

export default Loading
