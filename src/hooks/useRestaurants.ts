import { fetchRestaurants } from '../api/api'
import { type Restaurant } from '../interfaces/Restaurant'
import { useState } from 'react'

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getRestaurants = async (search: string): Promise<void> => {
    setLoading(true)
    try {
      const tempRestaurants: Restaurant[] = []
      const res: any = await fetchRestaurants(search)
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
      setRestaurants(tempRestaurants)
    } catch (error) {
      throw new Error('Errror fetching restaurants')
    }
    setLoading(false)
  }

  return { restaurants, loading, getRestaurants }
}

export default useRestaurants
