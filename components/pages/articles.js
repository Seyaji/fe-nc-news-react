import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticles } from '../../api/api'

import Header from '../styled/header'
import Content from '../styled-react/content'
import GridContainer from '../styled/gird-container'

import generateArticles from '../../utils/generate-articles';


const Articles = () => {

   const params = useParams()

   const [ articles, setArticles ] = useState(null)

   useEffect(() => {
      getArticles(params)
      .then(result => {
         setArticles(result)
      })
   }, [])
   
   return (
      <>
         <Header>
               {articles && <h3>{articles[0].topic}</h3>}
         </Header>
               {articles && generateArticles(articles, ['all', 4], 140)}
      </>
   )
}
export default Articles