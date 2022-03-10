import axios from 'axios';

const api = axios.create({
   baseURL: 'https://seyaji-nc-news.herokuapp.com/api'
})

export const getArticles = async (params) => {

   const path = params?.id 
   ? `/articles/${params.id}` 
   : '/articles'

   return api({
      method: 'get',
      url: path,
      params: params
   })
   .then((response) => {

      const responseKey = params?.id 
      ? response.data 
      : response.data.articles

      return responseKey
   })
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

export const patchVotes = async (params) => {
   console.log(params)
   return api.post(`/articles/${params.id}`, { inc_votes: params.inc_votes })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}