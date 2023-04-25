import type { FC } from 'react'
import { Sun } from 'react-feather'

const ToggleThemeButton: FC = () => {
  return (
    <button className="ml-auto rounded-md p-1">
      <Sun />
    </button>
  )
}

export default ToggleThemeButton
