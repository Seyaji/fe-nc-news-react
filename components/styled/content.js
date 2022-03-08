import react from 'react'
import styled, { css } from 'styled-components'

const Content = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.extraColor};
   padding: 0em;
   width: 100%;
   height: 100%;
`;

export default Content;