import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import InlineDiv from '../styled/inline-div';
import AltText from '../styled/alt-text';
import GridContainer from '../styled/gird-container'
import Likes from './likes-articles'

const StyledContent = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.extraColor};
   padding: 0em;
   width: 100%;
   height: 100%;

`;

const TextBox = styled.div`
   display: flex;
   flex-direction: column;
   align-content: flex-end;
`


const Content = ({ id, title, author, date, body, votes }) => {
   return (
      <>
         <StyledContent>
            <h3>
               <Link to={`/articles/id/${id}`}>{title}</Link>
            </h3>
            <InlineDiv>
               <AltText>Author: {author}</AltText>
               <AltText>{date}</AltText>
            </InlineDiv>
            <Likes votes={votes} id={id}/>
               <p>{body}</p>
         </StyledContent>
      </>
   );
}


export default Content;