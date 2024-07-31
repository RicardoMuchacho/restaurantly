const apiKey = process.env.REACT_APP_MAPS_API_KEY;
const apiURL = (address: string) => `https://maps.googleapis.com/maps/api/place/textsearch/json?/place/textsearch/json?query=${address}&radius=5000&type=restaurant&key=${apiKey}`;

export const fetchRestaurants = async (address: string) => {
  let encondedAddress = address.replace(" ", "%20")
  const response = await fetch(apiURL(encondedAddress));
  console.log(response)

  const data = await response.json();
  console.log(data)
  return data;
}
