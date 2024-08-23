
import { fetchRestaurants } from "../api/api";
import { Restaurant } from "../interfaces/Restaurant";
import { useState } from "react";

const useRestaurants = (search: string) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getRestaurants = async (search: string) => {
    setLoading(true)
    try {
      let temp_restaurants:Restaurant[] = [];
      const res: any = await fetchRestaurants(search)
      console.log(res)
      res.places.slice(0, 8).forEach((rt: any) => {
        const photoReference = rt.photos?.[0]?.name;

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

  return {restaurants, loading, getRestaurants}
}

export default useRestaurants;