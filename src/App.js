import { useState, useEffect } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./Components/Body";

const App = ()=>{
    return(
        <div>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/> )