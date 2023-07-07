const Restaurantcard = ({cloudinaryImageId,name,cuisines,costForTwoString,slaString,avgRating}) => {
  return (
    <div className="RestaurantCrad">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwoString}</h4>
        <h4>{slaString}</h4>
        <h4>{avgRating}</h4>
    </div>
  )
}

export default Restaurantcard