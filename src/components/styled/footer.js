import react from 'react'
import styled, { css } from 'styled-components'

const Footer = styled.div`
   background-color: ${({ theme }) => theme.background};
   width: 100%;
   height: auto;
   border-top: 2px solid;
   border-color: ${({ theme }) => theme.color};
   display: flex;
   justify-content: center;
   transition: all 0.50s linear;

   & h3 {
      padding-left: 1em;
      padding-right: 1em;
      margin: 0;
   }

   & a:hover {
      text-decoration: none;
   }
`

export default Footer