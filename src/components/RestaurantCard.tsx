import React from "react"
import { Restaurant } from "../interfaces/Restaurant"
import placeholderImg from "../assets/placeholder.png"

interface Props {
  restaurant: Restaurant;
}

const priceLevelMapping: { [key: string]: {text:string, color:string} } = {
  "PRICE_LEVEL_INEXPENSIVE": {text: "$", color: "green"},
  "PRICE_LEVEL_MODERATE": {text: "$$", color: "orange"},
  "PRICE_LEVEL_EXPENSIVE": {text: "$$$", color: "red"},
};

const RestaurantCard = ({restaurant}:Props) => {
  const photoUrl = restaurant.image ? `https://places.googleapis.com/v1/${restaurant.image}/media?key=${process.env.REACT_APP_MAPS_API_KEY}&maxWidthPx=400` : null;
  
  const handleNavigation = () => {
    window.open(restaurant.link, '_blank');
  }

  return(
      <div style={{width: "280px", height: "280px"}} className="card p-0">
        <div className="">
          <img width={279} height={160} className="card-image object-fit-cover" src={photoUrl || placeholderImg} alt={restaurant.name} />
        </div>
        <div className="px-3 py-2">
          <div style={{paddingRight: 10}} className="d-flex justify-content-between">
            <h5 style={{paddingRight: 5, width: 180, overflow:"hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{restaurant.name}</h5>
            <h5 style={{whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{restaurant.rating} <i className="bi bi-star-fill text-primary"></i></h5>
          </div>
          <div className="d-flex flex-row justify-content-between py-1">
            <div className="d-flex flex-column gap-1">
              <span className="m-0 d-inline" style={{color: priceLevelMapping[restaurant.price]?.color || "orange"}}>Price: {priceLevelMapping[restaurant.price]?.text || "$$"}</span>
              <p className="m-0">{restaurant.type}</p>
            </div>
              <button onClick={handleNavigation} style={{height: 45, width: 45}} className="btn btn-primary m-2"><i className="bi bi-geo-alt fs-5"></i></button>
          </div>
        </div>
      </div>
    )
}

export default RestaurantCard;