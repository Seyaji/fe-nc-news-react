import React from 'react'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { getComments, getUser } from '../../api//api'
import CommentBox from './comment-box'



const Comments = ({id}) => {
   const [ comments, setComments ] = useState(null)


   useEffect(() => {
      getComments(id)
      .then(response => setComments(response))
   }, [])

   const generateComments = (array) => {
      return array.map((comment, index) => {
         return (
            <CommentBox key={comment.id + 'COMMENT'} comment={comment} />
         )
      })
   }

   return (
      <>
         <p>comments:</p>
         {comments && generateComments(comments)}
      </>
   )
}

export default Comments