import React from 'react';
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'
import Headline from '../styled/headline'
import StyledTitle from '../styled/title';
import AltText from '../styled/alt-text';
import InlineDiv from '../styled/inline-div';
import GridContainer from '../styled/gird-container';
import Content from '../styled-react/content';
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
            <Content
               key={article.id}
               title={article.title}
               author={article.author}
               date={published(article)}
               body={maxBody}
            />
         );
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
                           <AltText>Author: {headline.author}</AltText>
                           <AltText>{published(headline)}</AltText>
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