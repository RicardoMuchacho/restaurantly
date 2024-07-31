import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import { Restaurant } from "../interfaces/Restaurant";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";
import { fetchRestaurants } from "../api/api";
import RestaurantPlaceholder from "../components/RestaurantPlaceholder";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")

  // function createGoogleMapsLink(name:string) {
  //   const { lat, lng } = coordinates;
  //   return `https://www.google.com/maps/search/?api=1&query=${name}`;
  // }

  const fetchData = async () => {
    setLoading(true)
    try {
      let temp_restaurants:Restaurant[] = [];
      const res = await fetchRestaurants(search)
      res.places.slice(0, 8).forEach((rt: any) => {
        const photoReference = rt.photos?.[0]?.name;

        console.log(photoReference)
        temp_restaurants.push({
          name: rt.displayName.text,
          address: rt.formattedAddress,
          type: rt.primaryTypeDisplayName.text,
          rating: rt.rating,
          price: rt.priceLevel,
          link: rt.googleMapsUri,
          image: photoReference,
        })
      })
      setRestaurants(temp_restaurants)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }


  return (
      <div style={{height: "100vh", width: "100vw"}}>
        <header className="p-4">
          <div className="">
            <h2 className="text-center text-primary"> Restaurantly Recommendations App</h2>
          </div>
          <div className="d-flex p-2 justify-content-center">
            <SearchBar loading={loading} search={search} setSearch={setSearch} fetchRestaurants={fetchData}/>
          </div>
        </header>
        <main style={{marginBottom: 100}} className="w-100 h-auto">
          <div className="container">
            <div className="row row-cols-1-sm row-cols-2-md row-cols-3-lg row-cols-4-xl g-3">
              {restaurants.length == 0 ? (
                Array.from({length: 4}).map((_, index) => (
                  <div key={index} className="col d-flex justify-content-center">
                    <RestaurantPlaceholder/>
                  </div>
                ))
              ) : (
                restaurants.map((restaurant, index) => (
                  <div key={index} className="col d-flex justify-content-center">
                    <RestaurantCard restaurant={restaurant}></RestaurantCard>
                  </div>
                ))
              )}        
            </div>
          </div>
        </main>
        <Footer/>
      </div>
  )
}

export default Home