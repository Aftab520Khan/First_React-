import React,{useState} from 'react'

const Alert = () => {
    const [detail, setdetail] = useState({ nam:'', nick:'' })
    
    let Alt = () => {
        console.log('clicked')
        alert(`Record Save Successful.  \n Name : ${detail.nam} \t Nick_Name : ${detail.nick}`)
    }
  return (
      <div>
          <input type='text' placeholder='ENTER U NAME'
              onChange={
                  (e) => setdetail(
                      { nam:e.target.value, nick:detail.nick})} /><br /><br />
          <input type='text' placeholder='ENTER U NICKNAME'
              onChange={
                  (e) => setdetail(
                      { nick:e.target.value, nam:detail.nam})} /><br /><br />
          <button onClick={Alt}> Submit </button>

    </div>
  )
}


export { Alert }