import React from 'react';
import styled, { css } from 'styled-components'

const GridContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: auto;
   margin-left: 18%;
   margin-right: 18%;
   column-gap: 4em;
   row-gap: 1em;
   justify-content: center;
   grid-template-areas:
      "content content"
      "content content"
      "content content";
   transition: all 0.25s ease-in-out;
   @media (max-width: 868px) {
      grid-template-columns: 1fr;
      grid-template-areas:
      "content"
      "content"
      "content"
      "content";
   }
`

export default GridContainer