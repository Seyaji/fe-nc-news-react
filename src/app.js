
import React from 'react';
import HelloWorld from '../components/hello-world'
import ThemeButton from '../components/theme-button'
import * as theme from '../components/theme'
import GlobalStyles from '../components/global-styles'
import Navbar from '../components/navbar';
import Header from '../components/header'
import CategoriesNav from '../components/categories-nav'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import * as api from '../api/api'

function App() {
   const [ currentTheme, setCurrentTheme ] = useState(theme.light)
   const [results, setresults] = useState({
      results: ''
   })
   const handleAsync = async () => {
      const results = await api.getArticles()
      console.log(results)
   }
   // handleAsync()
   return (
      <ThemeProvider theme={currentTheme} >
         <GlobalStyles />
         <Navbar>
            <HelloWorld />
            <ThemeButton 
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}/>
         </Navbar>
         <Header>
            <h1>Vibe</h1>
         </Header>
         <CategoriesNav/>
         
      </ThemeProvider>
   )
}

export default App