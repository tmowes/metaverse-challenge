import Image from 'next/image'

import { Flex } from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'

import Home from '../App/Home'
import Login from '../App/Login'

export default function HomeApp() {
  const { isAuthenticated } = useMoralis()

  return (
    <Flex w="100vw" h="100vh" overflow="hidden">
      <Image
        src="https://links.papareact.com/55n"
        alt="futuric background"
        layout="fill"
        objectFit="cover"
      />
      <Flex m="auto" zIndex={10}>
        {!isAuthenticated ? <Login /> : <Home />}
      </Flex>
    </Flex>
  )
}
