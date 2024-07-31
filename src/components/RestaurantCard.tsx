import React from "react"
import { Restaurant } from "../interfaces/Restaurant"
import placeholder from "../assets/placeholder.png"

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({restaurant}:Props) => {
  return(
    <div className="card">
      <img className="card-image" height={100} width={100} src={placeholder} alt="logo" />
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <h5 className="card-text">Ratings: {restaurant.rating}</h5>
      </div>
    </div>
  )
}

export default RestaurantCard;