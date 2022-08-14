import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { A } from './A'
import { Aa } from './Aa'
import { About } from './About'
import { Contact } from './Contact'
import { Error } from './Error'
import { Home } from './Home'
import { Linkk } from './Linkk'

export const App = () => {
  return (<>
    
    <Linkk/>
    <Routes>
      
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/contact' element={<Contact />} />
    <Route exact path='*' element={<Error />} /> 
      
      <Route index exact path='/' element={<Home />}/>
      <Route exact path='/A' element={<A />} />
       <Route exact path='/Aa' element={<Aa />} />
      

  </Routes>
  </>
    )
}
