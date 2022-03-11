import React from 'react';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/api';
import InlineDiv from '../styled/inline-div';

const FormBox = styled.div`
   color: ${({ theme }) => theme.color};
   display: block;
   width: 300px;
   margin: 50px auto;
`;

const Label = styled.label`
   margin-bottom: 0.5em;
   color: ${({ theme }) => theme.color};
   display: block;
`;

const Input = styled.input`
   padding: 0.5em;
   color: ${({ theme }) => theme.color};
   background: '#FFAC41';
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   border-radius: 6px;
   width: 100%;
   margin-bottom: 0.5em;
`;

const Message = styled.label`
   margin-bottom: 0.5em;
   color: ${({ theme }) => theme.color};
   display: block;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 8px;
  border-width: 0;
  color: '#000';
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  touch-action: manipulation;
  :hover { 
      background-color: ${({ theme }) => theme.extraColor};
   }

`

const Form = ({ setIsOpen, setActiveUser, activeUser }) => {

   const [ username, setUsername ] = useState(null);
   const [ loginAttempt, setLoginAttempt ] = useState(null);

   const handleChange = (event) => {
      setUsername(event.target.value);
   };

   useEffect(() => {
      getUser(username)
      .then(response => response)
      .then(user => setActiveUser(user))
   }, [loginAttempt]);

   const handleClick = (event) => {
      if (!event.target.value) {
         setIsOpen(!open);
      }
      if (event.target.value) {
         setIsOpen(!open);
         setLoginAttempt(username);
      }
   };

   return (
      <FormBox>
         <Label htmlFor="label">Login for user privilidges</Label>
         <Input id="label" onChange={handleChange} />
         <Message>Enter your username and click submit</Message>
         <InlineDiv>
            <Button type="submit" onClick={handleClick} value={username}>
               submit
            </Button>
            <Button type="submit" onClick={handleClick} >
               cancel
            </Button>
         </InlineDiv>
      </FormBox>
   );
};

export default Form;
