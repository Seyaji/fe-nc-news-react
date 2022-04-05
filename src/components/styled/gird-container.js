import React from 'react';
import styled, { css } from 'styled-components'


const mediaQueries = ({ columns }) => {
   const queries = {
      4: [3, 2, 1],
      3: [2, 1, 1],
      2: [1, 1, 1],
      1: [1, 1, 1]
   }
}

const GridContainer = styled.div`
   display: grid;
   grid-template-columns: ${(props) => `repeat(${(props.columns)}, 1fr)`};
   grid-template-rows: 1fr, 40px;
   margin-left: 18%;
   margin-right: 18%;
   gap: 2em 1em;
   justify-content: center;
   transition: all 0.25s ease-in-out;
   grid-template-areas:
      "content content"
      "content content";
   @media (max-width: 868px) {
      grid-template-columns: 2fr;
      grid-template-areas:
      "content"
      "content";
   }
      /* Portrait */
   @media only screen 
   and (min-device-width: 375px) 
   and (max-device-width: 812px) 
   and (-webkit-min-device-pixel-ratio: 3)
   and (orientation: portrait) { 
      grid-template-columns: 2fr;
      grid-template-areas:
      "content"
      "content";
   }

   /* Landscape */
   @media only screen 
   and (min-device-width: 375px) 
   and (max-device-width: 812px) 
   and (-webkit-min-device-pixel-ratio: 3)
   and (orientation: landscape) { 
      grid-template-columns: ${(props) => `repeat(${(props.columns)}, 1fr)`};
      grid-template-areas:
      "content content"
      "content content";
   }
`

export default GridContainer