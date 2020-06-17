import styled from 'styled-components'
import React from 'react'

import { theme } from '@ravenous/theme/standard-theme'

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  min-width: 100px;
  align-self: center;
  text-align: center;
  border-radius: 4px;
  padding: 0.72rem 1.7rem;
  background-color: ${theme.accent};
  color: ${theme.text.light};
  font-weight: 600;
  transition: background-color 0.5s;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${theme.accentDark};
  }
`
export const Button = ({ text, onClick }: ButtonProps): JSX.Element => (
  <ButtonStyle onClick={onClick}>
    <span>{text}</span>
  </ButtonStyle>
)

interface ButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
