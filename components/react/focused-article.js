import React from 'react';
import StyledTitle from '../styled/title';
import InlineDiv from '../styled/inline-div';
import AltText from '../styled/alt-text';
import Spotlight from '../styled-react/spotlight'
import Headline from '../styled/headline'
import Likes from '../styled-react/likes'

const FocusedArticle = ({ title, author, date, body, id, votes}) => {
   return (
      <Headline>
         <StyledTitle>
            <h3>{title}</h3>
            <Spotlight />
            <InlineDiv>
               <AltText>Author: {author}</AltText>
               <AltText>{date}</AltText>
            </InlineDiv>
            <p>{body}</p>
            <Likes votes={votes} id={id}/>
         </StyledTitle>
      </Headline>
   );
};

export default FocusedArticle;