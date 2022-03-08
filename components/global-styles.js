import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  body {
     margin: 0;
     /* font-family: "Monaco", monospace; */
     font-family: 'Rubik', sans-serif;
     font-weight: 300;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear; 
  }

  & h1 {
      font-size: 100px;
      font-family: 'Playfair Display', serif;
      font-weight: 800;
   }
`

export default GlobalStyles