import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'

import generateArticles from '../../utils/generate-articles';
import pageTitle from '../../utils/page-title'
import FocusedArticle from '../react/focused-article';

import published from '../../utils/published';


const Articles = () => {

   const params = useParams()
   const location = useLocation()

   const [ articles, setArticles ] = useState(null)

   useEffect(() => {
      getArticles(params)
      .then(result => {
         setArticles(result)
      })
   }, [params])
   
   useEffect(() => {
      console.log('effect')
      selectLayout()
   }, [articles])


   const selectLayout = () => {
      return articles?.title
      ? <FocusedArticle
      title={articles.title}
      author={articles.author}
      date={published(articles)}
      body={articles.body}
      id={articles.article_id}
      votes={articles.votes}
      />
      : generateArticles(articles, ['all', 4], 140)
   }
   
   return (
      <>
         <Header>
               {articles && <h3>{pageTitle(location.pathname)}</h3>}
         </Header>
               {articles && selectLayout()}
      </>
   )
}
export default Articles