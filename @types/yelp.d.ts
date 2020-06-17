declare interface SortList<T> {
  [key: string]: T
}

declare interface Businesses {
  alias: string
  categories: [Categories]
  coordinates: { latitude: double; longitude: double }
  display_phone: string
  distance: double
  id: string
  image_url: string
  is_closed: boolean
  location: Location
  name: string
  phone: string
  price: string
  rating: number
  review_count: number
  transactions: []
  url: string
}

declare interface Categories {
  alias: string
  title: string
}

declare interface Location {
  address1: string
  address2: string
  address3: string
  city: string
  country: string
  display_address: []
  state: string
  zip_code: string
}

declare interface BusinessCard {
  id: string
  imgSrc: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  category: string
  rating: number
  reviewCount: number
  url: string
}

declare type sortBy = 'best_match' | 'rating' | 'review_count'
