import axios, { AxiosInstance } from 'axios'

const apiKey =
  'xNjoDNT0iZ2dPa9rbpQcg0iz2xIGmPj0My5OqfQQAqjxft3pE6-lCA9yR_btLl0D-EIglh7kNmoifuLXXLE_d5dhv-2r3nasDMfCWnYWEqx0K242AQyUqU01iqdhXnYx'
const instance: AxiosInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/', // Prepended with CORS
  headers: { Authorization: `Bearer ${apiKey}` },
})

const Yelp = {
  async search(term: string, location: string, sortBy: sortBy): Promise<[BusinessCard]> {
    const res = await instance.get(`search?term=${term}&location=${location}&sort_by=${sortBy}`)

    const { businesses } = res.data
    return businesses.map((business: Businesses) => ({
      id: business.id,
      imgSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0].title,
      rating: business.rating,
      reviewCount: business.review_count,
      url: business.url,
    }))
  },
}
export default Yelp
