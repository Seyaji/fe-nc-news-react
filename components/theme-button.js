import React from 'react';
import * as theme from './theme'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  color: ${({ theme }) => theme.color};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;



const ThemeButton = ({ currentTheme, setCurrentTheme, dark, light }) => {
   const handleChange = (event) => {
      setCurrentTheme(currentTheme.id === '🌙' ? theme.light : theme.dark)
   }
   return (
      <StyledButton 
      type='button' 
      onClick={handleChange}>
      {currentTheme.id}
      </StyledButton>
   )
}

export default ThemeButton;