import published from './published'
import React from 'react'
import Content from '../components/styled-react/content'
import GridContainer from '../components/styled/gird-container'
import HeadlineTitle from '../components/styled-react/headline-title'
import LineBreak from '../components/styled/line'

const generateArticles = (array, layout, characters) => {

   if (layout[0] === 'all') {
      layout = Array(Math.round(array.length / layout[1])).fill(layout[1])
   }
   console.log(array[0])
   const items = [...array]
   const portion = (start, end) => items.splice(start, end);

   return layout.map((number, index) => {

      const columns = typeof number === 'number' ? number : 4
      const articleList = portion(0, columns)
      const lineBreak = layout[index - 1] === 'break' ? <LineBreak /> : null
      const populate = (articles) => articleList.map((article) => {

         const textCap = {
            1: 100,
            2: 50,
            3: 35,
            4: 30,
            break: 50,
         }
         const maxBody =
            article.body
               .split('')
               .slice(0, characters || article.body.length - 1)
               .join('') + '...';

         const maxTitle =
            article.title.length > textCap[number] 
               ? article.title
               .split('')
               .slice(0, textCap[columns] || article.body.length - 1)
               .join('') + '...'
               : article.title

         if (number === 'break') {
            return (
               <>
                  <HeadlineTitle key={article.id} id={article.id} title={maxTitle} />
               </>
            );
         }

         return (
            <Content
               key={article.article_id}
               id={article.article_id}
               title={maxTitle}
               author={article.author}
               date={published(article)}
               body={maxBody}
               votes={article.votes}
            />
         );
      })
      return (
         <>
               {lineBreak}
            <GridContainer key={index} columns={columns}>
               {populate(articleList)}
            </GridContainer>
         </>
      )
   });

};

export default generateArticles