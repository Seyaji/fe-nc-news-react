import React from 'react'
import OptionsButton from '../styled/options-button'
import InlineDiv from '../styled/inline-div';


const Queries = ({setQueries}) => {
   const handleClick = (event) => {
      setQueries((currentValue) => {
         const copy = { ...currentValue }
         copy.order = event.target.value
         return copy
      })
   }
   return (
      <InlineDiv>
         <OptionsButton type="button" onClick={handleClick} value={'asc'}>↟Asc</OptionsButton>
         <OptionsButton type="button" onClick={handleClick} value={'desc'}>↡Desc</OptionsButton>
      </InlineDiv>
   )
}

export default Queries