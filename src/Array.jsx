import React from 'react';
import arry from './Arr.json';


const Array = () => {
   let a=arry.map((val) => {
       return <>
           <h6>{`${val.id}   ----   ${val.name} ---- ${val.degree}`}</h6>
       </>
      
    })
    return <h1>{ a}</h1>
}
export default Array


/*
<h1>Select DDL :</h1>
<span>List : </span>
<select >
    <option >Apple</option>
    <option>Banana</option>
    <option>Grapes</option>
    <option>Pomogranate</option>
    <option>WaterMelon</option>
    <option>Cherry</option>
    <option>Mango</option>
    <option>Kiwi</option>
</select> */