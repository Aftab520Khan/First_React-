import React,{useState} from 'react';
import css from './default.css';

    
const DifferentButton = () => {
    const [dat, setdate] = useState()
    
    const change = () => {
        const date = new Date().toLocaleTimeString();
        setdate(date)
    }
    setInterval(change,1000)
      return (
          <div>
              
              <h1>{dat}</h1>
              <button onClick={change}>💕💕💕😍😍<br/>😘</button>
           
      </div>
      )
    }
    

export default DifferentButton