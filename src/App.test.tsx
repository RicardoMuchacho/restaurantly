import React from 'react'
import { type Restaurant } from './interfaces/Restaurant'
import RestaurantCard from './components/RestaurantCard'
import RestaurantPlaceholder from './components/RestaurantPlaceholder'
import SearchBar from './components/SearchBar'
import { fireEvent, render, waitFor } from '@testing-library/react'

test('Restaurant search result', async () => {
  const restaurant: Restaurant = {
    name: 'Test Restaurant',
    address: 'Test Address',
    rating: 4.5,
    price: 'PRICE_LEVEL_MODERATE',
    type: 'Test Cuisine',
    link: 'https://maps.app.goo.gl/RA49Sq3vnerVSqa99'
    // image: "test_image"
  }

  const mockFetchRestaurants = jest.fn().mockResolvedValue([
    {
      name: 'Test Restaurant',
      address: 'Test Address',
      rating: 4.5,
      price: 'PRICE_LEVEL_MODERATE',
      type: 'Test Cuisine',
      link: 'https://maps.app.goo.gl/RA49Sq3vnerVSqa99'
      // image: "test_image"
    }
  ])

  const mockSetSearch = jest.fn()
  const search = 'Pizza in Barcelona'
  const loading = false
  const mockHandler = jest.fn()
  const placeholderComponent = render(<RestaurantPlaceholder />)
  const restaurantCardComponent = render(<RestaurantCard restaurant={restaurant} />)
  const searchComponent = render(
    <SearchBar
      setSearch={mockSetSearch}
      search={search}
      loading={loading}
      fetchRestaurants={mockHandler}
    />
  )

  // Check if the "Search" text is rendered
  searchComponent.getByText('Search')

  // Simulate click event on the search button
  const searchButton = searchComponent.getByText('Search')
  fireEvent.click(searchButton)

  // Check if fetchRestaurants is called
  expect(mockFetchRestaurants).toHaveBeenCalled()
  // expect(mockFetchRestaurants.mock.calls).toHaveLength(1);

  // Check for RestaurantCard render
  await waitFor(() => {
    const restaurantName = restaurantCardComponent.getByText('Test Restaurant')
    expect(restaurantName).not.toBeNull();
  })
})
