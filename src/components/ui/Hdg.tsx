import type { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type HdgProps = {
  children: ReactNode
}

const Hdg: FC<HdgProps> = ({ children }) => {
  return (
    <Heading as="h1" my={6} fontSize="3xl">
      {children}
    </Heading>
  )
}

export default Hdg
