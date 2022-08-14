import React from "react";
import A from './images.jfif';
import and from './android.png';
import style from "./Main.css"

export function Header() {
    return <>
        <pic className='Image' >
            <img src={A}></img>
        </pic>
    
    </>
}


export function Name() {
    return <>
        <h1 id="name">Aftab Ahamad Khan <br/>
            <h3>Software Developer</h3> 
        </h1>
        <p>Maharashtra , Mumbai</p>
    </>
}



export function Button() {
    return <>
        <button> <img src={and}/>  Email  </button>
    </>
}