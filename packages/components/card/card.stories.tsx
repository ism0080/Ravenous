import React from 'react'
import { Card } from '.'

export default { title: 'Card' }

const details: BusinessCard = {
  id: 'storybook',
  url: 'www.google.co.nz',
  imgSrc: 'https://s3-media3.fl.yelpcdn.com/bphoto/ce03LQzKzAYce0qc4f0c3g/o.jpg',
  name: 'Pizzeria',
  address: '42 Rotherham St',
  city: 'Christchurch',
  state: 'CAN',
  zipCode: '8061',
  category: 'Pizza',
  rating: 3,
  reviewCount: 10,
}

export const card = (): JSX.Element => <Card details={details} />
