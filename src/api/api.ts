const apiKey = process.env.REACT_APP_MAPS_API_KEY;
const apiURL = `https://places.googleapis.com/v1/places:searchText`;

export const fetchRestaurants = async (address: string) => {
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey!,
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.googleMapsUri,places.primaryTypeDisplayName,places.rating,places.priceLevel,places.photos'
    },
    body: JSON.stringify({
      "textQuery": address,
      "includedType":"restaurant"
    })
  });
  console.log(response)

  const data = await response.json();
  console.log(data)
  return data;
}
