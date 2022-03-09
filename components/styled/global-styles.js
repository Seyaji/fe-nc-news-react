import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

   body {
      margin: 0;
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
      transition: all 0.50s linear;
   }

   & a {
      color: ${({ theme }) => theme.color};
      text-decoration: none;
   }
   & a:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.linkColor}
   }


   & h1 {
      font-size: 100px;
      font-family: 'Playfair Display', serif;
      font-weight: 800;
   }

   & h2 {
      padding: 0;
      margin: 0;
      font-size: 50px;
      font-family: 'Playfair Display', serif;
      font-weight: 800;
   }

   & h3 {
      padding: 0;
      margin: 0;
      font-size: 30px;
      font-family: 'Playfair Display', serif;
      font-weight: 800;
   }

   /* width */
   & ::-webkit-scrollbar {
      width: 10px;
   }

   /* Track */
   & ::-webkit-scrollbar-track {
      background: transparent;
   }

   /* Handle */
   & ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color};
   }

   /* Handle on hover */
   & ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`;

export default GlobalStyles;
