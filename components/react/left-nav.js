import React from 'react';
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import InlineDiv from '../styled/inline-div';

const LeftNav = () => {
  const timeNow = new Date()
  const location = useLocation().pathname === '/'

  return (
    <>
      <InlineDiv>
        {location && <h3><Link to='/'>Vibe</Link></h3>}
        <p>{timeNow.toDateString()}</p>
      </InlineDiv>
        {!location && <h2><Link to='/'>Vibe</Link></h2>}
    </>
  );
};

export default LeftNav;