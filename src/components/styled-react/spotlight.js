import React from 'react';
import styled, { css }from 'styled-components';
import spotlight from '../../images/spotlight.png'

const SpotlightImage = styled.img`
   max-height: 50vh;
   width: 100%;
   object-fit: cover;
   object-position: 0% 20%;

`

const Spotlight = () => {
   return (
      <SpotlightImage src={spotlight} />
   )
}

export default Spotlight;