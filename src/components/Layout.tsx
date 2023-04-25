import type { FC, ReactNode } from 'react'
import Header from '@/components/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-900 pb-5 text-white dark:bg-zinc-100 dark:text-gray-900">
      <div className="m-auto w-[1000px]">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
