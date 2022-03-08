import React from 'react';
import styled, { css } from 'styled-components'

const GridContainer = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   grid-template-columns: 1fr;
   gap: 0.1em;
   justify-content: center;
   grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
      
`