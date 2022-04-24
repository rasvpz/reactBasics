import { ChakraProvider } from '@chakra-ui/react'
import {Text, Button} from '@chakra-ui/react'
import Header from './components/Header'
import {useState} from 'react'

function App() {
  const [myStateCount, myStateSetCount] = useState(0)

  const addCount =() =>{

    myStateSetCount(myStateCount+1)
    console.log(myStateCount);

  }

  return (
    <ChakraProvider>
      <Header />  
      <Button onClick={addCount} colorScheme='blue'>ADD</Button>
      <Text>Counter : {myStateCount}</Text>
    </ChakraProvider>
  );
}

export default App;
