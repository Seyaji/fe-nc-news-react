import React from 'react';
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'
import Headline from '../styled/headline'
import StyledTitle from '../styled/title';
import TextItalic from '../styled/text-italic';
import InlineDiv from '../styled/inline-div';

import CategoriesNav from '../styled-react/categories-nav'


const Home = () => {

   const [ articles, setArticles ] = useState(null)
   const [ headline, setHeadline ] = useState(null)

   useEffect(() => {
      getArticles()
      .then(articleList => {
         setArticles(articleList)

      })
   }, [])

   const findHeadline = (() => {
      if (articles && !headline) {
         setHeadline(articles[0])
         
      }
   })()

   const published = new Date(headline?.created_at).toDateString()
   console.log(published)

   return (
      <>
         <Header>
            <h1>Vibe</h1>
         </Header>
         <CategoriesNav />
         <Headline>
            {
               headline && (
                  <StyledTitle>
                     <h3>{headline.title}</h3>
                        <InlineDiv>
                           <TextItalic>Author: {headline.author}</TextItalic>
                           <TextItalic>{published}</TextItalic>
                        </InlineDiv>
                     <p>{headline.body}</p>
                  </StyledTitle>
               )
            }
         </Headline>
      </>
   );
}

export default Home;