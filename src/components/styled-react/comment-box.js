import React from 'react'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { getComments, getUser } from '../../../api/api'
import InlineDiv from '../styled/inline-div';
import published from '../../../utils/published'
import AltText from '../styled/alt-text'
import Likes from '../styled-react/likes-comments'

const CommentBoxDiv = styled.div`
   border-color: ${({ theme }) => theme.extraColor};
   border-bottom: 1px solid;
`


const CommentBox = ({ comment }) => {
   return (
      <CommentBoxDiv key={comment.id}>
         <InlineDiv>
            <AltText>User: {comment.author}</AltText>
            <AltText>{published(comment)}</AltText>
         </InlineDiv>
         <p>{comment.body}</p>
         <Likes votes={comment.votes} id={comment.article_id} />
      </CommentBoxDiv>
   );
}

export default CommentBox