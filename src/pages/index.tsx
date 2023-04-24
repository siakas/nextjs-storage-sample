import type { NextPage } from 'next'
import { AddIcon } from '@chakra-ui/icons'
import { Box, Grid, GridItem, IconButton, Image, Text } from '@chakra-ui/react'
import Header from '@/components/layout/Header'
import Hdg from '@/components/ui/Hdg'

const Home: NextPage = () => {
  return (
    <Box bg="blackAlpha.900" color="white" minHeight="100vh" pb={20}>
      <Box w="1000px" m="auto">
        <Header />
        <Hdg>国内映画</Hdg>
        <Grid templateColumns="repeat(5, 1fr)" gap={2} mb={16}>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              ドライブ・マイ・カードライブ・マイ・カー
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              孤狼の血
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              フリーガイ
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              ダークナイト
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              RRR
            </Text>
          </GridItem>
        </Grid>

        <Hdg>海外映画</Hdg>
        <Grid templateColumns="repeat(5, 1fr)" gap={2} mb={16}>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              ドライブ・マイ・カー
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              孤狼の血
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              フリーガイ
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              ダークナイト
            </Text>
          </GridItem>
          <GridItem>
            <Box position="relative">
              <Image
                src="https://placehold.jp/600x600.png"
                alt=""
                objectFit="cover"
                borderRadius={3}
                w="100%"
                display="block"
                sx={{ aspectRatio: '2 / 3' }}
              />
              <IconButton
                aria-label="マイリストに追加"
                icon={<AddIcon />}
                borderRadius="full"
                colorScheme="blackAlpha"
                border={2}
                position="absolute"
                right="6px"
                bottom="6px"
              />
            </Box>
            <Text
              pt={2}
              pr={3}
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1.4"
            >
              RRR
            </Text>
          </GridItem>
        </Grid>

        <Hdg>韓流ドラマ</Hdg>
        <Hdg>アニメ</Hdg>
        <Hdg>コメディ</Hdg>
      </Box>
    </Box>
  )
}

export default Home
