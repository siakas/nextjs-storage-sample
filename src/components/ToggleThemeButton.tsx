import type { FC } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'react-feather'

const ToggleThemeButton: FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      className="ml-auto rounded-md p-1"
      aria-label="テーマ切り替え"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {mounted && <>{theme === 'dark' ? <Sun /> : <Moon />}</>}
    </button>
  )
}

export default ToggleThemeButton
