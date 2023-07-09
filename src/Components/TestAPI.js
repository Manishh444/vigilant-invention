import React, { useEffect, useState } from 'react'
import Restaurantcard from './Restaurantcard'

const filterdata = (search, restaurants)=>{
    const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(search)
    );
    return filterData};

const TestAPI = () => {

    const[Restaurant, setRestaurant] = useState([])
    const[Search, setSearch] = useState()
    useEffect(()=>{
        console.log("hello effect")
        getRestaurant()
    },[])
    const getRestaurant = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.637278&lng=77.2259488&restaurantId=25823");
        const json = await data.json()
        console.log(json)
        //  console.log("this is console",json?.data?.cards[2]?.data?.data?.cards)
        //  setRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        
    }
    return (
        <div>OK TESTED</div>
    )
}

export default TestAPI;