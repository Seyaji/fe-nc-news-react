import React from 'react';
import * as theme from '../styled/theme'
import styled, { css } from 'styled-components'
import Login from '../react/login'
import InlineDiv from '../styled/inline-div';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 30px;
  padding: 0;
  border: 2px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  height: 30px;
  width: 30px;

`;

const ThemeButton = ({ currentTheme, setCurrentTheme, dark, light }) => {
   const handleChange = () => {
      setCurrentTheme(currentTheme.id === '🌙' ? theme.light : theme.dark)
   }
   return (
      <InlineDiv>
         <Login />
         <h3>
               <StyledButton type="button" onClick={handleChange}>
                  {currentTheme.id}
               </StyledButton>
         </h3>
      </InlineDiv>
   );
}

export default ThemeButton;