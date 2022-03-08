// -----------~~~=*%$}> Libraries <{$%*=~~~-----------
import React from 'react';
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import * as api from '../api/api'

// -----------~~~=*%$}> Pure Styled <{$%*=~~~-----------
import GlobalStyles from '../components/styled/global-styles'
import * as theme from '../components/styled/theme'
import Navbar from '../components/styled/navbar';

// -----------~~~=*%$}> Hybrid Styled <{$%*=~~~-----------
import ThemeButton from '../components/styled-react/theme-button'

// -----------~~~=*%$}> React <{$%*=~~~-----------
import LeftNav from '../components/react/left-nav'

// -----------~~~=*%$}> Pages <{$%*=~~~-----------
import Home from '../components/pages/home';



function App() {

   const [ currentTheme, setCurrentTheme ] = useState(theme.dark)

   return (
      <ThemeProvider theme={currentTheme} >
         <GlobalStyles />
         <Navbar>
            <LeftNav />
            <ThemeButton 
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}/>
         </Navbar>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/' />
               <Route path='/' />
            </Routes>
         </BrowserRouter>

      </ThemeProvider>
   )
}

export default App