import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const {id} = useParams()
    const [Menu, setMenu] = useState({})
    useEffect(()=>{
        // console.log("useEffect in process")
        getRestaurantMenu()
    },[])
    const getRestaurantMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.637278&lng=77.2259488&restaurantId="+id);
        const json = await data.json();
        setMenu(json?.data?.cards[0]?.card?.card?.info)

    }
  return Menu?.length===0? ("Heloooo"): (
    <div className='RestaurantCard'>
        <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+Menu.cloudinaryImageId} alt='Restaurant_Img'/>
        <h4>{Menu.name}</h4>
        <h4>{Menu.costForTwoMessage}</h4>   
        <h4>{Menu.avgRatingString}</h4>
    </div>
  )
}

export default RestaurantMenu