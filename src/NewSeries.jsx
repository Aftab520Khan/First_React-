import React from 'react';
import './img/img.css'


export const NewSeries = (props) => {
  return (
      
          <div className='cards'>
              <div className='cards-img'>
                  <img src={props.img}/>
                  <div className='title'>
                      <h3>{ props.title}</h3>
                      <p>{props.desc}</p>
                  </div>
              </div>
          </div>
    
  )
}
