import React, { useState } from 'react'
import { Sort } from '.'

export default { title: 'Sort Options' }

const sortByOptions: SortList<sortBy> = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
}

export const sortOptions = () => {
  const [sortBy, setSortBy] = useState<sortBy>('best_match')

  const handleClick = (value: sortBy) => {
    setSortBy(value)
  }

  return <Sort sortOptions={sortByOptions} sortByValue={sortBy} onClick={handleClick} />
}
