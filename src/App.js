import { useState, useEffect } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";

const App = ()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/> )