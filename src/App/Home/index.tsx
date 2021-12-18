import { Button, Flex, Heading } from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const { user, logout } = useMoralis()
  return (
    <Flex
      h="50vh"
      w="33vw"
      bg="rgba(255,255,255,0.17)"
      p="8"
      direction="column"
      borderRadius="16"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.3)"
      backdropFilter="blur(10px)"
      backgroundClip="padding-box"
      boxShadow="dark-lg"
    >
      <Heading>Welcome {user?.get('username')} to Metaverse App</Heading>
      <Button
        mt="auto"
        colorScheme="blackAlpha"
        textTransform="uppercase"
        onClick={logout}
      >
        Logout
      </Button>
    </Flex>
  )
}
