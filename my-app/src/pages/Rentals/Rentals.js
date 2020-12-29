import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( 50%, 50% );
    background-color: green;
    padding: 30px;

    h1{
        color: yellow;
    }
`;

function Rentals() {
    return (
        <Div>
            <h1>idankzm</h1>
        </Div>
    )
}

export default Rentals
