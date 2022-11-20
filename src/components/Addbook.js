import { Button } from '@mui/material'
import React, { useState } from 'react'

const Addbook = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <Button onClick={() =>setcount(count+1)}> set me</Button>
      <div>You clicked me {count} times</div>
    </div>
  )
}

export default Addbook
