import React from 'react'
import css from './default.css'

const Challenge = () => {
    let  date = new Date();
    date = date.getHours();
    let greet = "";

    if (date >= 1 && date < 12) {
        greet= " Good Morning 🌄 "
    }
    else if (date >= 12 && date < 17 ) {
        greet= "Good Afternoon 🔥"
    }
    else if (date >= 17 && date < 20 ) {
        greet ="Good Evening 🌲🌲🌲"
        }
    else  {
        greet="Good Night 💤"
    }
    
return (
    <div>
        <h1> Hello,{ greet}</h1>         
    </div> )
}

export { Challenge };