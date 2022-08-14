import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { NewSeries } from "./NewSeries";
import { App } from "./Note/App";
import Multiply from './Multiply'
/*import { M } from "./Rout/M";

import { ReactState } from "./ReactState";
import { App } from "./Router/A";
import { B } from "./Router/B";
import A from './Arr.json'
const arr = A.map((item) => {
    return <NewSeries
        img={item.img}
        title={item.name}
        desc={item.id}
    />
})*/



ReactDOM.render(
    <>
<BrowserRouter>
        <App/>
        </BrowserRouter>

   {/*     <Multiply/>*/}

        
    </>, document.getElementById('root')
)

