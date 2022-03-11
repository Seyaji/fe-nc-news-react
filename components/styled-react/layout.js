import React from 'react';
import styled, { css } from 'styled-components';
import LayoutOne from '../../src/images/one.svg'
import LayoutTwo from '../../src/images/two.svg'
import LayoutThree from '../../src/images/three.svg'
import LayoutFour from '../../src/images/four.svg'
import InlineDiv from '../styled/inline-div';

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
         <LayoutButton type="button" onClick={handleClick} value={1}>1</LayoutButton>
         <LayoutButton type="button" onClick={handleClick} value={2}>2</LayoutButton>
         <LayoutButton type="button" onClick={handleClick} value={3}>3</LayoutButton>
         <LayoutButton type="button" onClick={handleClick} value={4}>4</LayoutButton>
      </InlineDiv>
   )
}

export default Layout