import type { FC, ReactNode } from 'react'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type NextLinkProps = {
  href: string
  children: ReactNode
}

const LinkCN: FC<NextLinkProps> = ({ href, children }) => {
  return (
    <Link as={NextLink} href={href}>
      {children}
    </Link>
  )
}

export default LinkCN
