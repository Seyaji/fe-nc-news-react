import React from 'react';
import styled, { css } from 'styled-components';

const OptionsButton = styled.button`
   background-color: ${({ theme }) => theme.buttonColor};
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   padding: 5px;
   cursor: pointer;
   :hover { 
      background-color: ${({ theme }) => theme.extraColor};
   }
`

export default OptionsButton