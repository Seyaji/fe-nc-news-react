import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticles } from '../../../api/api'

import Header from '../styled/header'

import FocusedArticle from '../react/focused-article';
import Layout from '../react/layout'
import Queries from '../react/queries'
import FlexLeft from '../styled/flex-left'
import CategoriesNav from '../styled-react/categories-nav'
import DropdownBox from '../styled-react/queries-dropdown-box'
import LabelButton from '../styled/label-button';
import QueriesBox from '../styled/queries-box'

import pageTitle from '../../../utils/page-title'
import generateArticles from '../../../utils/generate-articles';
import published from '../../../utils/published';


const Articles = () => {

   const params = useParams()
   const location = useLocation()

   const [ articles, setArticles ] = useState(null)
   const [ layout, setLayout ] = useState(4)
   const [ queries, setQueries ] = useState({ 
      topic: params?.topic,
      title: params?.title,
      sort_by: params?.sort_by,
      order: params?.order,

   })

   const paramSelect = queries && !params.id ? queries : params

   useEffect(() => {
      getArticles(paramSelect)
      .then(result => {
         setArticles(result)
      })
   }, [queries, params])
   
   useEffect(() => {
      selectLayout()
   }, [articles, layout, queries])


   const selectLayout = () => {
      return articles?.title
      ? <FocusedArticle
      title={articles.title}
      author={articles.author}
      body={articles.body}
      id={articles.article_id}
      votes={articles.votes}
      comments={true}
      />
      : generateArticles(articles, ['all', +layout], 140)
   }
   
   return (
      <>
         <Header>{articles && <h3>{pageTitle(location.pathname).replace(/[/]/ig, ': ')}</h3>}</Header>
         <CategoriesNav key={'category articles'} setQueries={setQueries}/>
         { !params?.id &&
            <>
               <QueriesBox>
                  <div><LabelButton>Sort By:</LabelButton><DropdownBox setQueries={setQueries} /></div>
                  <div><LabelButton>Sort Order:</LabelButton>
                  <Queries 
                  queries={queries} 
                  setQueries={setQueries} 
                  /></div>
                  <div><LabelButton>Layout:</LabelButton>
                  <Layout setLayout={setLayout} /></div>
               </QueriesBox>
            </>
         }
         {articles && selectLayout()}
      </>
   );
}
export default Articles