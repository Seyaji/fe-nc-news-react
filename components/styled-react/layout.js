import React from 'react';
import styled, { css } from 'styled-components';
import InlineDiv from '../styled/inline-div';
import OptionsButton from '../styled/options-button'

const LayoutButton = styled.button`
   background-color: ${({ theme }) => theme.color};
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   cursor: pointer;
   :hover { 
      background-color: ${({ theme }) => theme.extraColor};
   }
`

const Layout = ({ setLayout }) => {
   const handleClick = (event) => {
      setLayout(event.target.value)
      console.log(`Layout`)
   }
   return (
      <InlineDiv>
         <OptionsButton type="button" onClick={handleClick} value={1}>1</OptionsButton>
         <OptionsButton type="button" onClick={handleClick} value={2}>2</OptionsButton>
         <OptionsButton type="button" onClick={handleClick} value={3}>3</OptionsButton>
         <OptionsButton type="button" onClick={handleClick} value={4}>4</OptionsButton>
      </InlineDiv>
   )
}

export default Layout