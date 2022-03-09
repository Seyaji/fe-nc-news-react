import React from 'react'
import styled, { css } from 'styled-components'
import InlineDiv from '../styled/inline-div';
import AltText from '../styled/alt-text';

const StyledContent = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.extraColor};
   padding: 0em;
   width: 100%;
   height: 100%;
`;


const Content = ({ title, author, date, body }) => {
   return (
      <StyledContent>
         <h3>{title}</h3>
         <InlineDiv>
            <AltText>Author: {author}</AltText>
            <AltText>{date}</AltText>
         </InlineDiv>
         <p>{body}</p>
      </StyledContent>
   );
}


export default Content;