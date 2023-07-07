const Restaurantcard = ({cloudinaryImageId,name,cuisines,costForTwoString,slaString,avgRating}) => {
  return (
    <div className="RestaurantCard">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <p>{costForTwoString}</p>
        <h4>{slaString} {avgRating }</h4>
        <h4>{}</h4>
    </div>
  )
}

export default Restaurantcard