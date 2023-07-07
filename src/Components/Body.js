import React, { useEffect, useState } from 'react'
import Restaurantcard from './Restaurantcard'

const Body = () => {

    const[Restaurant, setRestaurant] = useState([])
    useEffect(()=>{
        getRestaurant()
    },[])
    const getRestaurant = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
         console.log("this is console",json?.data?.cards[2]?.data?.data?.cards)
         setRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        
    }
    return Restaurant?.length===0? ("Heloooo"):(
        <>
        <div>
            <input>
            </input>
            <button>search</button>
        </div>
    <div className='bodyCard'>{Restaurant.map((x)=>{
        return(<Restaurantcard {...x.data} key={x.data.id} />)
        
    })}</div></>
  )
}

export default Body;