import React from 'react';
import styled, { css } from 'styled-components';

const OptionsButton = styled.button`
   background-color: ${({ theme }) => theme.color};
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   cursor: pointer;
   :hover { 
      background-color: ${({ theme }) => theme.extraColor};
   }
`

export default OptionsButton