import React from 'react';
import styled from 'styled-components';



const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    border: 3px solid black;


   img{
       width: 100%;
       height: 100%;
   }

    h1{
        font-size: 30px;
        line-height: 50px;
    }

    p{
        max-width:400px;
        line-height: 25px;
        padding: 20px;
    }
`;

export default function InfoAbout({ heading, paragrpahOne, image }) {
    return (
        <Div>
            <h1>{heading}</h1>
            <p>{paragrpahOne}</p>
            <img src={image} alt="kazam" />
        </Div>
    )
}
