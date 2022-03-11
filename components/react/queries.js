import React from 'react'
import OptionsButton from '../styled/options-button'
import InlineDiv from '../styled/inline-div';


const Queries = ({setQueries, params}) => {
   const handleClick = (event) => {
      console.log(params)
      setQueries(event.target.value)
   }
   return (
      <InlineDiv>
         <OptionsButton type="button" onClick={handleClick} value={1}>Asc</OptionsButton>
         <OptionsButton type="button" onClick={handleClick} value={1}>Desc</OptionsButton>
      </InlineDiv>
   )
}

export default Queries