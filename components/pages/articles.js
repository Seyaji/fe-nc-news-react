import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'

import generateArticles from '../../utils/generate-articles';
import pageTitle from '../../utils/page-title'
import FocusedArticle from '../react/focused-article';
import Layout from '../react/layout'
import Queries from '../react/queries'
import FlexLeft from '../styled/flex-left'
import CategoriesNav from '../styled-react/categories-nav'
import DropdownBox from '../styled-react/dropdown-box'
import LabelButton from '../styled/label-button';

import published from '../../utils/published';


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
   }, [articles, layout, params])


   const selectLayout = () => {
      return articles?.title
      ? <FocusedArticle
      title={articles.title}
      author={articles.author}
      date={published(articles)}
      body={articles.body}
      id={articles.article_id}
      votes={articles.votes}
      comments={true}
      />
      : generateArticles(articles, ['all', +layout], 140)
   }
   
   return (
      <>
         <Header>{articles && <h3>{pageTitle(location.pathname).replace('/', ' ')}</h3>}</Header>
         <CategoriesNav key={'category articles'} setQueries={setQueries}/>
         { !params?.id &&
            <>
               <FlexLeft >
                  <p><LabelButton>topic ↠</LabelButton><DropdownBox setQueries={setQueries} /></p>
               </FlexLeft>
               <FlexLeft>
                  <p><LabelButton>sort order ↠</LabelButton>{'  '}</p>
                  <Queries 
                  queries={queries} 
                  setQueries={setQueries} 
                  />
               </FlexLeft>
               <FlexLeft>
                  <p><LabelButton>layout ↠</LabelButton></p>
                  <Layout setLayout={setLayout} />
               </FlexLeft>
            </>
         }
         {articles && selectLayout()}
      </>
   );
}
export default Articles