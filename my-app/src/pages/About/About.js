import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( 50%, 50% );
`;

function About() {
    return (
        <Div>
            <h1>IDAN</h1>
        </Div>
    )
}

export default About
