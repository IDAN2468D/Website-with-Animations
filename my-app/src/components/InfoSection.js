import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`

`;
const Container = styled.section`
    
`;
const ColumnLeft = styled.section`
    
`;

const ColumnRight = styled.section`
    
`;


function InfoSection({ heading, paragrpahOne, paragrpahTwo, buttonLabel, reverse, image }) {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragrpahOne}</p>
                    <p>{paragrpahTwo}</p>
                    <Button to="/homes">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
