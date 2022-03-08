import axios from 'axios';

const api = axios.create({
   baseURL: 'https://seyaji-nc-news.herokuapp.com/api'
})

export const getArticles = async (params) => {
   return api({
      method: 'get',
      url: '/articles',
      params: params
   })
   .then((response) => response.data.articles)
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