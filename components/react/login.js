import React from 'react';
import { useState } from 'react'
import styled, { css } from 'styled-components';
import Form from '../styled-react/form'

const LoginBox = styled.div`
   display: ${(props) => props.open};
   position: fixed;
   z-index: 1;
   padding-top: 100px;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   background-color: rgb(0, 0, 0);
   background-color: rgba(0, 0, 0, 0.4);

`;



const LoginContent = styled.div`
   border-radius: 25px;
   background-color: ${({ theme }) => theme.background};
   margin: auto;
   padding: 20px;
   border: 1px solid ${({ theme }) => theme.color};
   width: 400px;
   display: flex;
   justify-content: center;
`

const Login = () => {
   const [ open, setIsOpen] = useState(false)
   const [ activeUser, setActiveUser] = useState(null);

   const handleClick = (event) => {
      console.log('clicked')
      setIsOpen(!open)
   }

   return (
      <>
         <LoginBox open={open ? 'block' : 'none'}>
            <LoginContent>
               <Form setIsOpen={setIsOpen} setActiveUser={setActiveUser} activeUser={activeUser}/>
            </LoginContent>
         </LoginBox>
         {!activeUser && <a onClick={handleClick}>Login</a>}
         {activeUser && <a onClick={handleClick}>{activeUser.name}</a>}
      </>
   );
};

export default Login;
