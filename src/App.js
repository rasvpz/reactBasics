import { ChakraProvider } from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import Header from './components/Header'
import Counter from './components/counter'
import {useState} from 'react'

function App() {
  const [myStateCount, myStateSetCount] = useState(0)

  const addCount =() =>{
    myStateSetCount(myStateCount+1)
  }

  const obj =[
    {title : 'First Counter', count : myStateCount},
    {title : 'Second Counter', count : myStateCount},
    {title : 'Third Counter', count : myStateCount}
  ] 

  return (
    <ChakraProvider>
      <Header />  
      <Button onClick={addCount} colorScheme='blue'>ADD</Button>
     {
       obj.map((dtls, index)=>
          (
            <Counter key={index} {...dtls} />
          )
       )
     }
    </ChakraProvider>
  );
}

export default App;
