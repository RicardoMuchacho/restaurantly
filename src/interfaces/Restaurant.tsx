export interface Restaurant {
  id: string;
  name: string;
  address: string;
  cuisine: string;
  rating: number;
  image?: string;
  link?: string;
  coordinates: Location;
}

export interface Location {
    lat: number;
    lng: number;
}