import React from "react";
import { Restaurant } from "../interfaces/Restaurant";
import RestaurantCard from "./RestaurantCard";
import { fireEvent, render } from "@testing-library/react";
import placeholderImg from "../assets/placeholder.png";
import { prettyDOM } from "@testing-library/react";

test('renders RestaurantCard', () => { 
  const restaurant: Restaurant = {
    name: "Test Restaurant",
    address: "Test Address",
    rating: 4.5,
    price: "PRICE_LEVEL_MODERATE",
    type: "Test Cuisine",
    link: "https://maps.app.goo.gl/RA49Sq3vnerVSqa99",
    // image: "test_image"
  };

  // const mockHandler = jest.fn()
  const component = render(RestaurantCard({restaurant}));

  // component.getByText(restaurant.name);
  const button = component.container.querySelector("button");
  
  // fireEvent.click(button);
  // console.log(prettyDOM(button))
  
  
 })