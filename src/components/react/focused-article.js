import React from 'react';
import StyledTitle from '../styled/title';
import InlineDiv from '../styled/inline-div';
import AltText from '../styled/alt-text';
import Spotlight from '../styled-react/spotlight'
import Headline from '../styled/headline'
import Likes from '../styled-react/likes-articles'
import Line from '../styled/line'
import Comments from '../styled-react/comments'
import { Link } from 'react-router-dom'

const FocusedArticle = ({ title, author, date, body, id, votes, comments}) => {
   return (
      <Headline>
         <StyledTitle>
            <h3>
               <Link to={`/articles/id/${id}`}>{title}</Link>
            </h3>
            <Spotlight />
            <InlineDiv>
               <AltText>Author: {author}</AltText>
               <AltText>{date}</AltText>
            </InlineDiv>
            <p>{body}</p>
            <Likes votes={votes} id={id} request={'article'}/>
            {comments && <Comments id={id}/>}
         </StyledTitle>
      </Headline>
   );
};

export default FocusedArticle;