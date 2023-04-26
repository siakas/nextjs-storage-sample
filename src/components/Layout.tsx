import type { FC, ReactNode } from 'react'
import Header from '@/components/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-100 pb-5 text-gray-900 dark:bg-zinc-900 dark:text-white">
      <div className="m-auto w-[1000px]">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
