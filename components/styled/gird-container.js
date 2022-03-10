import React from 'react';
import styled, { css } from 'styled-components'

const GridContainer = styled.div`
   display: grid;
   grid-template-columns: ${(props) => `repeat(${(props.columns)}, 1fr)`};
   grid-template-rows: auto;
   margin-left: 18%;
   margin-right: 18%;
   gap: 2em 1em;
   justify-content: center;
   transition: all 0.25s ease-in-out;
   grid-template-areas:
      "content content"
      "content content";
   @media (max-width: 868px) {
      grid-template-columns: 1fr;
      grid-template-areas:
      "content";
   }
`

export default GridContainer