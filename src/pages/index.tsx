import type { NextPage } from 'next'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import LinkCN from '@/components/ui/LinkCN'

const Home: NextPage = () => {
  return (
    <>
      <Box bg="blackAlpha.900" color="white" minHeight="100vh">
        <Box as="header">
          <Flex px="60px" height="70px" alignItems="center">
            <Box>ロゴ</Box>
            <Flex w="100%">
              <Box>
                <LinkCN href="/">ホームホーム</LinkCN>
              </Box>
              <Box>
                <LinkCN href="/mylist">マイリスト</LinkCN>
              </Box>
              <Spacer />
              <Box>テーマ切り替え</Box>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Heading as="h1">Hello World</Heading>
        </Box>
      </Box>
    </>
  )
}

export default Home
