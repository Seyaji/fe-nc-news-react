import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { getTopics } from "../../../api/api"
import { Link } from 'react-router-dom' 
import Header from "../styled/header"

const CategoryDiv = styled(Header)`
   padding: 0em;
   border-color: ${({ theme }) => theme.extraColor};

   & nav {
      margin: .5em;
   }
   & a {
      color: ${({ theme }) => theme.color};
      display: inline;
      padding-left: .5em;
      padding-right: .5em;
   }
`

const CategoriesNav = ( { setQueries } ) => {
   const [ categories, setCategories ] = useState(null)
   useEffect(() => {
      getTopics()
      .then(result => {
         setCategories(result)
      })
   }, [])

   const handleClick = (value) => {
      setQueries((currentValue) => {
         const copy = { ...currentValue }
         copy.topic = value
         return copy
      })
   }


   const generateCategories = (topics) => {
      return topics.map((topic, index) => {
         const newTopic = (item) => {
            const newItem = item.split('')
            newItem[0] = newItem[0].toUpperCase()
            return newItem.join('')
         }
      return (
         <Link key={index} to={`/articles/${topic.slug}`} onClick={ () => handleClick(topic.slug) }>
            {newTopic(topic.slug)}
         </Link>
      ); 
      })
   }

   return (
      <CategoryDiv>
         <nav>
            <Link to={'/articles'}>All Articles</Link>
            {categories && generateCategories(categories)}
         </nav>
      </CategoryDiv>
   )
}

export default CategoriesNav
