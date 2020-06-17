import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, Sort, Input } from '@ravenous/components'
import { staticImages } from '@ravenous/res'

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.88rem;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`

const Wrapper = styled.div`
  background-image: url(${staticImages.hero.image});
  height: 25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 560px) {
    background-image: url(${staticImages.heroMobile.image});
  }
`

export const SearchScene = ({ searchYelp }: SearchSceneProps): JSX.Element => {
  const [term, setTerm] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [sortBy, setSortBy] = useState<sortBy>('best_match')
  const sortByOptions: SortList<sortBy> = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  }

  const handleClickSortByChange = (sortOption: sortBy) => {
    setSortBy(sortOption)
    if (term !== '' && location !== '' && sortBy != sortOption) {
      searchYelp(term, location, sortBy)
    }
  }

  const handleKeySortByChange = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchYelp(term, location, sortBy)
    }
  }

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (term === '' || location === '') {
      alert('Please Enter Search Values')
      return
    }
    searchYelp(term, location, sortBy)
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Sort sortOptions={sortByOptions} sortByValue={sortBy} onClick={handleClickSortByChange} />
      <InputWrapper>
        <Input placeholder='Search Businesses' onChange={handleTermChange} onKeyDown={handleKeySortByChange} />
        <Input placeholder='Where?' onChange={handleLocationChange} onKeyDown={handleKeySortByChange} />
      </InputWrapper>
      <Button text="Let's Go" onClick={handleSearch} />
    </Wrapper>
  )
}

interface SearchSceneProps {
  searchYelp: (term: string, location: string, sortBy: sortBy) => void
}
