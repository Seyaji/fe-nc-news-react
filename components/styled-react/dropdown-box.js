import React from 'react'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { getTopics } from '../../api/api'
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

   & :hover {
      background-color: ${({ theme }) => theme.extraColor};
      display: block;
      cursor: pointer;
   }
`

const DropdownBox = ({setQueries}) => {
   const [ categories, setCategories ] = useState(null)
   useEffect(() => {
      getTopics()
      .then(result => {
         setCategories(result)
      })
   }, [])

   const handleClick = (event) => {
      console.log(event)
      setQueries((currentValue) => {
         const copy = {...currentValue}
         copy.sort_by = event.target.value
         return copy
      })
   }


   return (
      <Dropdown onChange={handleClick}>
          <DropdownContent key={'title'} value={'title'} onClick={handleClick}>title</DropdownContent>
          <DropdownContent key={'date'} value={'created_at'} onClick={handleClick}>date</DropdownContent>
          <DropdownContent key={'author'} value={'author'} onClick={handleClick}>author</DropdownContent>
          <DropdownContent key={'body'} value={'body'} onClick={handleClick}>body</DropdownContent>
          <DropdownContent key={'votes'} value={'votes'} onClick={handleClick}>votes</DropdownContent>
      </Dropdown>
   )
}

export default DropdownBox