import React from 'react';
import styled, { css } from 'styled-components'

const InlineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
        padding-left: 1.5em;
    }
`

export default InlineDiv