import styled from 'styled-components'
import React from 'react'

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2.22rem;
  color: #ffffff;
  list-style-type: none;
`
const Li = styled.li.attrs({
  role: 'list',
})`
  cursor: pointer;
  width: 4.33rem;
  border-bottom: 1px solid #fff;
  padding: 0 2.58rem 0.33rem 2.58rem;
  line-height: 1.13;
  text-align: center;
  font-weight: 600;
  font-size: 0.83rem;
  transition: color 0.25s;

  &:hover {
    color: #d4cfcf;
  }

  &.active,
  .active:hover {
    border-bottom: 1px solid #f0c36c;
    color: #f0c36c;
  }
`
export const Sort = ({ sortOptions, sortByValue, onClick }: SortProps) => {
  const getSortByClass = (sortByOption: sortBy) => {
    if (sortByValue === sortByOption) return 'active'
    return ''
  }

  return (
    <Ul>
      {Object.keys(sortOptions).map((sortByOption, index) => {
        const sortByOptionValue = sortOptions[sortByOption]

        return (
          <Li key={index} className={getSortByClass(sortByOptionValue)} onClick={() => onClick(sortByOptionValue)}>
            {sortByOption}
          </Li>
        )
      })}
    </Ul>
  )
}

interface SortProps {
  sortOptions: SortList<sortBy>
  sortByValue: sortBy
  onClick: (sortValue: sortBy) => void
}
