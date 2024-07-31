import React from "react";
import { useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import { Restaurant } from "../interfaces/Restaurant";
import { Location } from "../interfaces/Restaurant";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";
import { fetchRestaurants } from "../api/api";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")

  function createGoogleMapsLink(coordinates: Location) {
    const { lat, lng } = coordinates;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      let temp_restaurants:Restaurant[] = [];
      console.log(search)
      const res = await fetchRestaurants("08029%20Barcelona")
      console.log(res)
      res.results.forEach((rt: any) => {
        temp_restaurants.push({
          id: rt.place_id,
          name: rt.name,
          address: rt.formatted_address,
          cuisine: rt.types[0],
          rating: rt.rating,
          coordinates: rt.geometry.location,
          link: createGoogleMapsLink(rt.geometry.location),
        })
      })
      console.log(temp_restaurants)
      setRestaurants(temp_restaurants)
    } catch (error) {
      console.log(error)
    } finally {

    }
    setLoading(false)
  }


  return (
    <div className="vw-100 vh-100">
      <header className="p-4 my-2">
        <div className="">
          <h2 className="text-center text-primary"> Restaurantly Recommendations App</h2>
        </div>
        <div className="d-flex p-2 justify-content-center ">
          <SearchBar loading={loading} search={search} setSearch={setSearch} fetchRestaurants={fetchData}/>
        </div>
      </header>
      <main className="mb-4">
        <div className="container">
          <div className="row row-cols-3 g-3">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="col">
                <RestaurantCard restaurant={restaurant}></RestaurantCard>
              </div>
            ))}
        </div>
       </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home