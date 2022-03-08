import React from 'react';
import styled , { css } from 'styled-components'

const LineBreak = styled.div`
   margin: 3em;

   border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
   margin-left: 18%;
   margin-right: 18%;
`
export default LineBreak