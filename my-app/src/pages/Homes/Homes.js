import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    width:100%;
    height: 600px;
    background-color: green;
    padding: 30px;
    border-bottom-left-radius: 30%;
    h1{
        color: yellow;
    }
`;

const Home = styled.div`
    position: absolute;
    width:100%;
    height:900px;
    top: 30%;
    z-index:-1;
    background-color: blue;
    border-top-right-radius:30%;
`;

function Homes() {
    return (
        <div>
            <Div>
                <h1>kazam</h1>
            </Div>
            <Home></Home>
        </div>
    )
}

export default Homes
