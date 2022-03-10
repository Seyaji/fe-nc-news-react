import React from 'react';
import { useState, useEffect } from "react"
import styled, { css } from 'styled-components'


const Headline = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
   margin-left: 18%;
   margin-right: 18%;
   margin-bottom: 3em;
   display: flex;
   justify-content: inline;
   text-align: justify;
   text-justify: inter-word;

   & h3 {
      text-align: center;
      text-justify: inter-word;
      
   }

`

export default Headline