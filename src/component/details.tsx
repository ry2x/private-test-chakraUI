import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'

const Details = () => {
  const colsSpan = useBreakpointValue({ base: 2, md: 1 })
  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>Your Details</Heading>
        <Text>create your account</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={colsSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder='Jhon' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colsSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder='Doe' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder='南大通り　1丁目 11-3' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colsSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder='大津市' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colsSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value='jp'>Japan</option>
              <option value='usa'>USA</option>
              <option value='kr'>South Korea</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant='primary' size='lg' w='full'>
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details
