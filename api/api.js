import axios from 'axios';

const api = axios.create({
   baseURL: 'https://seyaji-nc-news.herokuapp.com/api'
})

export const getArticles = async () => {
   return api({
      method: 'get',
      url: '/articles'
   })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}

export const getTopics = async () => {
   return api({
      method: 'get',
      url: '/topics'
   })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}