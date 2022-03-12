import React from 'react';
import styled, { css } from 'styled-components';
import OptionsButton from '../styled/options-button'


const LabelButton = styled.button`
   background-color: ${({ theme }) => theme.buttonColor};
   border-color: ${({ theme }) => theme.extraColor};
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
   border: 1px solid;
   & :hover {
      background-color: ${({ theme }) => theme.buttonColor};
      cursor: revert;
   }
`

export default LabelButton