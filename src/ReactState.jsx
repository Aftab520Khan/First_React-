import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Tool from '@mui/material/Tooltip';

export const ReactState = () => {
    const [count, setcount] = useState(0)
    
    const increment =() => {
        setcount(count + 1)
    }
    
    const decrement = () => {
        
        count == 0 ? alert('Quantity is 0'):
            setcount(count - 1)
         
        }
        


  return (
      <div ><br /><br />
          <Tool title='Substraction'>
        <Fab variant='extended' size="medium" color="error"   onClick={decrement}>
          Substraction< Remove/></Fab></Tool>
          <Button variant='outlined' color='success' onClick={decrement}>-</Button>
          <h1>{ count }</h1>
          <Fab variant='extended' size="medium" color="error"   onClick={increment}>
 Addition <AddIcon />
</Fab>

          <Button variant='outlined' color='error' onClick={increment}>+</Button>

    </div>
  )
}
