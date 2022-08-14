import React, { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  const [arry, setarr] = useState(0)
  const [name ,setname] =useState('')
  useEffect(() => { 
    document.title = name  
  }
  ,[arry]
  )
  
  
  const hand = () => {
    setarr(arry + 1)
    
  }
  const handa = () => {
    alert(    ` Title Changed \n New Title is ${name} `)
  }
  
  return (
    <div>
      <br />
      Home
      <br /><br />
      <input type="text" onChange={(e)=>setname(e.target.value)} />
      <button onClick={hand}>click me {arry}</button>
      <button onClick={handa}>Click Me </button>
      

    </div>
    
  )
}
