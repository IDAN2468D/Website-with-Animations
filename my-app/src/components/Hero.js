import React from 'react';
import styled, { css } from 'styled-components';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`

`;
const HeroSlider = styled.div`

`;
const HeroImage = styled.div`

`;
const HeroContent = styled.div`

`;



const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage>
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                    </HeroContent>
                                </HeroImage>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
