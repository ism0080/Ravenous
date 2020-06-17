import styled from 'styled-components'
import React from 'react'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 16.66rem;
  margin: 0 0.5rem 2.3rem 0.5rem;
`

const H2 = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`

const CardInformation = styled.div`
  display: flex;
  justify-content: space-between;
`

const P = styled.p`
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1rem;
`

const CardAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  &.rating {
    font-size: 0.88rem;
    line-height: 1rem;
  }
`

const H3 = styled.h3`
  color: #cca353;
  font-weight: 600;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 200px;
    object-fit: cover;
  }
`

interface CardProps {
  details?: BusinessCard
}

export const Card = ({ details }: CardProps): JSX.Element => (
  <>
    {details ? (
      <CardWrapper>
        <ImageContainer>
          <a href={details.url}>
            <img src={details.imgSrc} alt={details.name} />
          </a>
        </ImageContainer>
        <H2>{details.name}</H2>
        <CardInformation>
          <CardAddress>
            <P>{details.address}</P>
            <P>{details.city}</P>
            <P>
              {details.state}
              {details.zipCode}
            </P>
          </CardAddress>
          <CardReviews>
            <H3>{details.category}</H3>
            <H3 className='rating'>{details.rating} stars</H3>
            <p>{details.reviewCount} reviews</p>
          </CardReviews>
        </CardInformation>
      </CardWrapper>
    ) : null}
  </>
)
