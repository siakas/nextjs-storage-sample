import type { FC } from 'react'
import Link from 'next/link'
import { Sun } from 'react-feather'

const Header: FC = () => {
  return (
    <header>
      <div className="flex h-20 items-center gap-10">
        <img src="/logo.svg" width="120" height="20" alt="WEBFLIX" />
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/mylist">マイリスト</Link>
          </li>
        </ul>
        <button className="ml-auto rounded-md p-1">
          <Sun />
        </button>
      </div>
    </header>
  )
}

export default Header
