import React from 'react'
import { useState } from 'react'

export const List = () => {
    const [item, setItem] = useState()
    const [showItem , setShow]=useState([])

    const listOfItems = (e) => {
    setItem(e.target.value)
    }
    

    const Show = () =>  {
        setShow((old) => {
           return [...old , item]
        })
        setItem('')
    }
    const Delete = (id) => {
       /* setShow((old) => {
            return old.filter((arr, index) => {
                return index !== id;
            })
        })

       */ 

    }

  return (
      <>
          <h1> TODO LIST </h1>
          <input type="text" placeholder='Add Item ' onChange={listOfItems} value={item} /><br /><br />
          <button onClick={Show} style={{color:'green'}}>Add</button>
      
       <ol>{ showItem.map((val,index) => {
              return <>
                 
                  <li key={index} id={index}>{val} <i onClick={()=>{Delete(this.props.id)}} style={{ color: 'red' }}>X</i>
                  </li> 
              </>
          })}</ol>
      
      </>
  )
}
