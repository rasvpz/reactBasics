import { ChakraProvider } from '@chakra-ui/react'
import {Text } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  const name = ' Rasheed'
  return (
    <ChakraProvider>
      <Header myData = {name} />     
      <Text>Hi this is {name}</Text>
    </ChakraProvider>
  );
}

export default App;
