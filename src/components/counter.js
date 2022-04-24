import React from 'react'
import {Heading} from '@chakra-ui/react'

function counter(props) {
    const {title, count} = props
  return (
      <div>
        <Heading>{title} {count}</Heading>
      </div>
  )
}

export default counter