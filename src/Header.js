import React from 'react';
import A from './logo.png';
import s from './index.css'



function Header() {
    
    return <> <na className='navbar'>
        <img src={A} />
        <h1>React Native</h1>
    </na>
    <m className='main'>
            <h1> Main Part of the Body</h1>
            <ul>
                <li>Heart</li>
                <li>Liver</li>
                <li>Kidney</li>
            </ul>
        </m>
        
        <f className="footer">
            

        </f>
    </>
    

}


export { Header };