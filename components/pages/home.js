import React from 'react';
import { useState, useEffect } from 'react';
import { getArticles } from '../../api/api';

import Header from '../styled/header';
import LineBreak from '../styled/line';
import FocusedArticle from '../react/focused-article'
import CategoriesNav from '../styled-react/categories-nav';

import generateArticles from '../../utils/generate-articles';
import published from '../../utils/published'

const Home = () => {
   const [articles, setArticles] = useState(null);
   const [headline, setHeadline] = useState(null);

   useEffect(() => {
      getArticles().then((articleList) => {
         setArticles(articleList);
      });
   }, []);

   const findHeadline = (() => {
      if (articles && !headline) {
         setHeadline(articles[0]);
      }
   })();

   return (
      <>
         <Header>
            <h1>Vibe</h1>
         </Header>
         <CategoriesNav key={"category home"} />
            {headline && 
            <FocusedArticle
            key={headline.article_id + 'headline'}
            title={headline.title}
            author={headline.author}
            date={published(headline)}
            body={headline.body}
            votes={headline.votes}
            id={headline.article_id}
            />}
            {articles && generateArticles(articles, [2, 3, 'break', 3, 3, 4], 140)}
         <LineBreak key={'linebreak'} />
      </>
   );
};

export default Home;
