import React from 'react';
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'
import Headline from '../styled/headline'
import StyledTitle from '../styled/title';
import TextItalic from '../styled/text-italic';
import InlineDiv from '../styled/inline-div';
import GridContainer from '../styled/gird-container';
import Content from '../styled/content';
import LineBreak from '../styled/line'

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

   const generateArticles = (array, start, end, characters) => {
      const portion = array.slice(start, end)
      return portion.map(article => {

         const maxBody = article.body.split('').slice(0, (characters || article.body.length -1)).join('') + '...'

         return (
            <Content key={article.id}>
               <h3>{article.title}</h3>
               <InlineDiv>
                  <TextItalic>Author: {article.author}</TextItalic>
                  <TextItalic>{published(article)}</TextItalic>
               </InlineDiv>
                  <p>{maxBody}</p>
            </Content>
         )
      })

   }

   const published = (source) => new Date(source?.created_at).toDateString()

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
                           <TextItalic>{published(headline)}</TextItalic>
                        </InlineDiv>
                     <p>{headline.body}</p>
                  </StyledTitle>
               )
            }
         </Headline>
         <GridContainer>
            { articles && generateArticles(articles, 1, 7, 140)}
         </GridContainer>
         <LineBreak></LineBreak>
         <GridContainer>
            { articles && generateArticles(articles, 7, 13, 140)}
         </GridContainer>
      </>
   );
}

export default Home;