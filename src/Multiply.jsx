import React from 'react'
import { useState } from 'react'

const Multiply = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [num, setnum] = useState('');
  const [shows, setshow] = useState();

  const show = () => {
    setshow(
      count.map((val) => {
        return <><li>{ `${num} x ${val} = ${num * val}` }</li></>
      })
      
    )
  }
  
 const A = ['Aftab',1,'Khan']
  return (
    <div>
      <h1>Multiplication Table {num}</h1>
      <input type="text" onChange={e => { setnum(e.target.value) }} />
     <button onClick={show}>Show table</button>
      <h3>{shows}</h3>
      <h4>{ new Set  `${A}`}</h4>

    </div>
  )
}

export default Multiply


/*import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Multiply = () => {
  const [count,setcount] = useState(1)
  const [num, setnum] = useState(5)
  const [mul,setmul]=useState('')
 
 
  
  
  const Handle = () => {
    setcount(count + 1)
    setnum(` ${num} x ${count} = ${num * (count)}`)
    setmul(`${ num }  x ${count} = ${num * (count)}`)
}


  return (
    <div>
      <input type="text" onChange={(e)=>{setnum(e.target.value)}} placeholder='ENTER THE TABLE NAME' />
      <br /><br />
      <button onClick={Handle}>Click Me</button>
      <h3>{mul}</h3>



    </div>
  )
}

export default Multiply*/