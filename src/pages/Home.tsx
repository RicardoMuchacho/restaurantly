import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RestaurantCard from '../components/RestaurantCard'
import Footer from '../components/Footer'
import RestaurantPlaceholder from '../components/RestaurantPlaceholder'
// import useRestaurants from '../hooks/useRestaurants'
import { fetchRestaurants } from '../api/api'
import { Restaurant } from '../interfaces/Restaurant'
import { useQuery } from '@tanstack/react-query'

const getRestaurants = async (search: string): Promise<Restaurant[]> => {
  try {
    const tempRestaurants: Restaurant[] = []
    const res: any = await fetchRestaurants(search)
    if (!res.places) {
      throw new Error('No places found in the response')
    }
    res.places.slice(0, 8).forEach((rt: any) => {
      const photoReference = rt.photos?.[0]?.name
      tempRestaurants.push({
        name: rt.displayName.text,
        address: rt.formattedAddress,
        type: rt.primaryTypeDisplayName.text,
        rating: rt.rating,
        price: rt.priceLevel,
        link: rt.googleMapsUri,
        image: photoReference
      })
    })
    return tempRestaurants
  } catch (error) {
    throw new Error('Error fetching restaurants')
  }
}

const Home = () => {
  const [search, setSearch] = useState<string>('')
  // const { restaurants, loading } = useRestaurants()

  const { isPending, data: restaurants, refetch, isFetching, isError } = useQuery({
    queryKey: ['restaurants'],
    queryFn: () => getRestaurants(search),
    enabled: false,
    retry: false
  })

  const handleFetchRestaurants = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <header className="p-4">
        <div className="">
          <h2 className="text-center text-primary">
            {' '}
            Restaurantly Recommendations App
          </h2>
        </div>
        <div className="d-flex p-2 justify-content-center">
          <SearchBar
            loading={isFetching}
            search={search}
            setSearch={setSearch}
            fetchRestaurants={(e:any) => handleFetchRestaurants(e)}
          />
        </div>
      </header>
      <main style={{ marginBottom: 100 }} className="w-100 h-auto">
        <div className="container">
          <div className="row row-cols-1-sm row-cols-2-md row-cols-3-lg row-cols-4-xl g-3">
            {isError || restaurants?.length === 0 && <div className="col text-center">No restaurants found</div>}
            {isFetching || isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="col d-flex justify-content-center"
                >
                  <RestaurantPlaceholder />
                </div>
              ))
              : restaurants?.map((restaurant, index) => (
                <div
                  key={index}
                  className="col d-flex justify-content-center"
                >
                  <RestaurantCard restaurant={restaurant}></RestaurantCard>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
