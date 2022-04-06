// -----------~~~=*%$}> Libraries <{$%*=~~~-----------
import React from 'react';
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
import * as api from '../api/api'

// -----------~~~=*%$}> Pure Styled <{$%*=~~~-----------
import GlobalStyles from './components/styled/global-styles'
import * as theme from './components/styled/theme'
import Navbar from './components/styled/navbar'
import Footer from './components/styled/footer'

// -----------~~~=*%$}> Hybrid Styled <{$%*=~~~-----------
import ThemeButton from './components/styled-react/theme-button'


// -----------~~~=*%$}> React <{$%*=~~~-----------
import LeftNav from './components/react/left-nav'

// -----------~~~=*%$}> Pages <{$%*=~~~-----------
import Home from './components/pages/home';
import Articles from './components/pages/articles'

function App() {

   const [ currentTheme, setCurrentTheme ] = useState(theme.light)
   return (
      <ThemeProvider theme={currentTheme} >
         <GlobalStyles />
         <BrowserRouter>
            <Navbar>
               <LeftNav />
               <ThemeButton 
               currentTheme={currentTheme}
               setCurrentTheme={setCurrentTheme}/>
            </Navbar>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/articles' element={<Articles />} />
               <Route path='/articles/:topic' element={<Articles />} />
               <Route path='/articles/id/:id' element={<Articles />} />
            </Routes>
            <Footer>
               <p>© 2022</p>
            </Footer>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App