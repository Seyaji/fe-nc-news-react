import styled, { css } from 'styled-components'


const Header = styled.div`
   /* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'); */

   padding: 3em;
   display: flex;
   justify-content: space-around;
   border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
   margin-left: 15%;
   margin-right: 15%;

   & h1,h3 {
      margin-bottom: -0.5em;
   }

`
export default Header