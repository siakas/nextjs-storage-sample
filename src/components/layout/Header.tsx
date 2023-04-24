import { SunIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import LinkCN from '@/components/ui/LinkCN'

const Header = () => {
  return (
    <Box as="header">
      <Flex height="70px" alignItems="center" gap="0 40px">
        <Image src="/logo.svg" width="120" height="22" alt="WEBFLIX" />
        <Flex as="ul" w="100%" alignItems="center" gap="0 20px">
          <Box as="li">
            <LinkCN href="/">ホーム</LinkCN>
          </Box>
          <Box as="li">
            <LinkCN href="/mylist">マイリスト</LinkCN>
          </Box>
        </Flex>
        <Spacer />
        <IconButton
          aria-label="テーマ切り替え"
          icon={<SunIcon />}
          colorScheme="blackAlpha"
        />
      </Flex>
    </Box>
  )
}

export default Header
