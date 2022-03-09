import React from 'react';
import Header from '../styled/header'
import { useLocation, useParams } from 'react-router-dom'

const Articles = () => {
   const { topic, id } = useParams()
   console.log(topic)
   return (
      <Header>
            <h1>Articles</h1>
      </Header>
   )
}

export default Articles