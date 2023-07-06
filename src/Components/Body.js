import React, { useEffect, useState } from 'react'

const Body = () => {

    const[Restaurant, setRestaurant] = useState(null)
    useEffect(()=>{
        getRestaurant()
    },[])
    const getRestaurant = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        console.log(json)
    }
    return (
    <div>Body</div>
  )
}

export default Body;