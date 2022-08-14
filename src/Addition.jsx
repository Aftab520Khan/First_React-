import React,{useState} from 'react'

export  function Addition() {
    const [num, increment] = useState(0);

    const numIncrement = () => {
        increment (num+1)
    }
    
  return (
      <>
          <h1>{num}</h1>
          <button onClick={numIncrement}>Click me </button>
          
    </>
  )
}







