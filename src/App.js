import { useState, useEffect, Children } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import TestAPI from "./Components/testAPI";
import UserContext from "./Components/UserContext";
const App = ()=>{
    const [user, setUser] = useState("manish")
    return(
        <div>
            <UserContext.Provider value={{user}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/test",
                element:<TestAPI/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> )