import React, { useState } from 'react'


export const Input = () => {
  const [num,setnum]=useState({l:[]})
  return <>Java
    <input type='checkbox'></input><br/>
    Python
    <input type='checkbox'></input><br/>
    C#
    <input type='checkbox'></input><br />
    <textarea style={{height:100}}></textarea>
  </>
}

/*export const Input = () => {
  const [detail, setdetail] = useState({
    ame: '',
    email: '',
    phone: '',
    dob:''
  })
  return (
    <div>
      
    <h1>Form</h1>
      <input type='text'  placeholder='Enter your name'/><br/><br/>
      <input type='text'   placeholder='Enter your email'/><br/><br/>
      <input type='text'   placeholder='Enter your phone'/><br/><br/>
      <input type='text'  placeholder='Enter your DOB'/><br/><br/>
      <button >Submit</button>
    </div>
  )
}
*/