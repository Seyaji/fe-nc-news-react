import React from 'react';
import * as theme from './theme'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 30px;
  padding: 0;
  border: 2px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  height: 30px;
  width: 30px;
  /* transition: border 0.50s ease-out; */

`;



const ThemeButton = ({ currentTheme, setCurrentTheme, dark, light }) => {
   const handleChange = (event) => {
      setCurrentTheme(currentTheme.id === '🌙' ? theme.light : theme.dark)
   }
   return (
      <h3>
         <StyledButton 
         type='button' 
         onClick={handleChange}>
         {currentTheme.id}
         </StyledButton>
      </h3>
   )
}

export default ThemeButton;