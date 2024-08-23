import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";
import RestaurantPlaceholder from "../components/RestaurantPlaceholder";
import useRestaurants from "../hooks/useRestaurants";

const Home = () => {
  const [search, setSearch] = useState<string>("")
  const {restaurants, loading, getRestaurants} = useRestaurants(search)

  return (
      <div style={{height: "100vh", width: "100vw"}}>
        <header className="p-4">
          <div className="">
            <h2 className="text-center text-primary"> Restaurantly Recommendations App</h2>
          </div>
          <div className="d-flex p-2 justify-content-center">
            <SearchBar loading={loading} search={search} setSearch={setSearch} fetchRestaurants={getRestaurants}/>
          </div>
        </header>
        <main style={{marginBottom: 100}} className="w-100 h-auto">
          <div className="container">
            <div className="row row-cols-1-sm row-cols-2-md row-cols-3-lg row-cols-4-xl g-3">
              {restaurants.length === 0 ? (
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