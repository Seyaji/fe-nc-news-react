import React from 'react';
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledBox = styled.div`
   border-top: 1px solid ${({ theme }) => theme.secondaryColor};
   border-bottom: 1px solid ${({ theme }) => theme.extraColor};
   padding: 0em;
   width: 100%;
   height: 100%;
`

const HeadlineTitle = ({ id, title }) => {
   return (
      <StyledBox>
         <h4><Link to={`/articles/id/${id}`}>{ title }</Link></h4>
      </StyledBox>
   )
}

export default HeadlineTitle