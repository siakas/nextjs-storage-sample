import type { FC, ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2 className="my-4 text-3xl font-bold">{children}</h2>
}

export default Heading
