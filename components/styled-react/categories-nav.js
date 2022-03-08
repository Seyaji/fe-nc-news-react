import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { getTopics } from "../../api/api"
import Header from "../styled/header"

const CategoryDiv = styled(Header)`
   padding: 0em;
   border-color: ${({ theme }) => theme.extraColor};

   & ul, li {
      display: inline;
      padding-left: .5em;
      padding-right: .5em;
   }
`

const CategoriesNav = () => {

      const [ categories, setCategories ] = useState(null)
      useEffect(() => {
         getTopics()
         .then(result => {
            setCategories(result)
         })
      }, [])

   const generateCategories = (topics) => {
      return topics.map((topic, index) => {
         const newTopic = (item) => {
            const newItem = item.split('')
            newItem[0] = newItem[0].toUpperCase()
            return newItem.join('')
         }
         newTopic(topic.slug)
      return <li key={index}>{newTopic(topic.slug)}</li>
      })
   }

   return (
      <CategoryDiv>
         <ul>
            {categories && generateCategories(categories)}
         </ul>
      </CategoryDiv>
   )
}

export default CategoriesNav

