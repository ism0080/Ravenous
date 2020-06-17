import React, { useState } from 'react'
import styled from 'styled-components'

import { Header, Card } from '@ravenous/components'
import Yelp from '@ravenous/util/yelp'

import { SearchScene } from './search'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 4.4rem 10%;
`

export const HomeScene = (): JSX.Element => {
  const [businesses, setBusinesses] = useState<[BusinessCard] | undefined>(undefined)

  const fetchRestaurants = (term: string, location: string, sortBy: sortBy): void | Promise<void | [BusinessCard]> => {
    const results = Yelp.search(term, location, sortBy)
    if (results) return results.then((a: [BusinessCard]) => setBusinesses(a))
  }

  return (
    <>
      <Header text='Ravenous' />
      <SearchScene searchYelp={fetchRestaurants} />
      <Wrapper>
        {businesses?.map((business: BusinessCard) => {
          return <Card key={business.id} details={business} />
        })}
      </Wrapper>
    </>
  )
}
