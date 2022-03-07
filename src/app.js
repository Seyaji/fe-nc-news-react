
import React from 'react';
import HelloWorld from '../components/hello-world'
import ThemeButton from '../components/theme-button'
import * as theme from '../components/theme'
import GlobalStyles from '../components/global-styles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';

function App() {
   const [ currentTheme, setCurrentTheme ] = useState(theme.light)
   return (
      <ThemeProvider theme={currentTheme} >
         <GlobalStyles />
            <HelloWorld />
            <ThemeButton 
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}/>
      </ThemeProvider>
   )
}

export default App