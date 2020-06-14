import styled, { ThemeProvider } from 'styled-components'
import React from 'react'

import { theme } from '../../common/theme/standard-theme'

const ButtonStyle = styled.button`
  text-align: center;
  border-radius: 4px;
  padding: 0.72rem 1.7rem;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  transition: background-color 0.5s;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.accentDark};
  }
`
export const Button = ({ text }: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <ButtonStyle>
      <span>{text}</span>
    </ButtonStyle>
  </ThemeProvider>
)

interface ButtonProps {
  text: string
}
