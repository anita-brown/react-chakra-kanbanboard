import { Container, Heading } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading fontSize={{base: '4xl', sm: '5xl', md: '6xl'}} fontWeight="bold" textAlign="center" bgGradient="linear(to-l, #7928CA, #FF0080" bgClip="text" ml={4}>
        Welcome to Dnd Kanban
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>

      </Container>
    </>
  )
}

export default App
