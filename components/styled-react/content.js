import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import InlineDiv from '../styled/inline-div';
import AltText from '../styled/alt-text';

const StyledContent = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.extraColor};
   padding: 0em;
   width: 100%;
   height: 100%;
`;


const Content = ({ id, title, author, date, body }) => {
   return (
      <StyledContent>
         <h3><Link to={`/articles/${id}`} params={ { article_id: id } }>{ title }</Link></h3>
         <InlineDiv>
            <AltText>Author: {author}</AltText>
            <AltText>{date}</AltText>
         </InlineDiv>
         <p>{body}</p>
      </StyledContent>
   );
}


export default Content;