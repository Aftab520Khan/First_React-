import React from 'react'
import './iindex.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
export const Linkk = () => {
  return (
    <div className='main'>
      <ul>
     <li><Link to='/' >Home</Link> </li> 
     <li><Link to='about' >About</Link></li> 
     <li> <Link to='contact' >Contact</Link></li>  
     <li><Link to='A' >A</Link></li>
     <li> <Link to='Aa' >Aa</Link> </li>  
      </ul>
    </div>
  )
}