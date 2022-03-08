import React from 'react';
import styled, { css } from 'styled-components'
import InlineDiv from '../styled/inline-div';

const LeftNav = () => {
  const timeNow = new Date()
  return (
    <InlineDiv>
      <h3>Vibe</h3>
      <p>{timeNow.toDateString()}</p>
    </InlineDiv>
  );
};

export default LeftNav;