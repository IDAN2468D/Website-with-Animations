import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
    white-space: nowrap;
    outline: none;
    min-height: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? "16px 14px" : "14px 24px")};
    color: ${({ primary }) => (primary ? "#fff" : "#000dla")};
    font-size: ${({ big }) => (big ? "20px" : "14px")};


    &:hover{
        transform: translateY(-2px);
    }
`;