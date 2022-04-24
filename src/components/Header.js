import React from 'react'
import {Heading } from '@chakra-ui/react'

 function Header(props) {
  return (
    <Heading style={{color:'red', backgroundColor:'green'}}>Hello iam {props.myData}</Heading>
  )
}
export default Header