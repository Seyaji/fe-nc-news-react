import react from 'react'
import styled, { css } from 'styled-components'

const Navbar = styled.nav`
   background-color: ${({ theme }) => theme.background};
   width: 100%;
   height: auto;
   border-bottom: 2px solid;
   border-color: ${({ theme }) => theme.color};
   position: fixed;
   display: flex;
   justify-content: space-between;
   align-items: center;
   transition: all 0.50s linear;
   padding-left: 1em;
   padding-right: 1em;

   & h3 {
      padding-left: 1em;
      padding-right: 1em;
   }

   & a:hover {
      text-decoration: none;
   }
`

export default Navbar