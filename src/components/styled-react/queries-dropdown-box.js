import React from 'react'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { getTopics } from '../../../api/api'
import { Link } from 'react-router-dom'

const Dropdown = styled.select`
   background-color: ${({ theme }) => theme.buttonColor};
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   position: relative;
   display: inline-block;
   vertical-align: middle;
   border: 1px solid black;
   box-sizing: content-box;
   z-index: 1;
    -moz-box-sizing:content-box;
    -webkit-box-sizing:content-box;
   & :focus {
      border-color: blue;
   }
`

const DropdownContent = styled.option`
   background-color: ${({ theme }) => theme.buttonColor};
   border-color: ${({ theme }) => theme.extraColor};
   border: 1px solid;
   content: '↓';
   display: -webkit-inline-box;
   display: -ms-inline-flexbox;
   display: inline-flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   padding: 0;
   position: relative;
   z-index: -1;

   & :hover {
      background-color: ${({ theme }) => theme.extraColor};
      display: block;
      cursor: pointer;
   }
`

const DropdownBox = ({ setQueries }) => {
   const [ categories, setCategories ] = useState(null)
   useEffect(() => {
      getTopics()
      .then(result => {
         setCategories(result)
      })
   }, [])

   const handleClick = (event) => {
      setQueries((currentValue) => {
         const copy = {...currentValue}
         copy.sort_by = event.target.value
         return copy
      })
   }

   return (
      <Dropdown onChange={handleClick}>
          <DropdownContent key={'date'} value={'created_at'} >date</DropdownContent>
          <DropdownContent key={'title'} value={'title'} >title</DropdownContent>
          <DropdownContent key={'author'} value={'author'} >author</DropdownContent>
          <DropdownContent key={'body'} value={'body'} >body</DropdownContent>
          <DropdownContent key={'votes'} value={'votes'} >votes</DropdownContent>
      </Dropdown>
   )
}

export default DropdownBox