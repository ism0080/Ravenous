import styled, { ThemeProvider } from 'styled-components'
import React from 'react'

import { theme } from '../../common/theme/standard-theme'

const H1 = styled.h1`
  padding: 0.66rem 0;
  text-align: center;
  background-color: ${(props) => props.theme.accent};
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  color: ${(props) => props.theme.text.light};
  margin: 0;
`
export const Header = ({ text }: HeaderProps) => (
  <ThemeProvider theme={theme}>
    <H1>{text}</H1>
  </ThemeProvider>
)

interface HeaderProps {
  text: string
}
