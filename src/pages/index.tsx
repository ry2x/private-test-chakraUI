import { Container, Flex } from '@chakra-ui/react'
import Cart from '../component/cart'
import Details from '../component/details'

const IndexPage = () => {
  return (
    <Container maxW='container.xl' p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default IndexPage
