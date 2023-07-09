import React, { useEffect, useState } from 'react'
import Restaurantcard from './Restaurantcard'
import { Link } from 'react-router-dom';

const filterdata = (search, restaurants)=>{
    const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(search)
    );
    return filterData};

const Body = () => {

    const[Restaurant, setRestaurant] = useState([])
    const[Search, setSearch] = useState()
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
        <div className='searchBar'>
            <input 
            type='text'
            value={Search}
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            />
            <button onClick={()=>{
             const filterddata=filterdata(Search, Restaurant)
             setRestaurant(filterddata)
            }}>search</button>
        </div>
    <div className='bodyCard'>
        {Restaurant.map((x)=>{
        return(<Link to={'/restaurant/'+ x.data.id} key={x.data.id} ><Restaurantcard {...x.data} /></Link>)
    })}
    </div>
    </>
  )
}

export default Body;