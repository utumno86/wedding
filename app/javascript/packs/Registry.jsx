import React, {Component} from 'react'
import styled from 'styled-components'

const RegistryPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Box = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    border: 2px solid #4928A0;
    color: #4928A0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    justify-content: center;
    margin: auto;
    opacity: 0.5;
    width: 70%;
`;

const Tagline = styled.h1`
    text-align: center;
    font-size: 3em;
`;

const Date = styled.h1`
    font-family: 'Grand Hotel', cursive;
`;


class Registry extends Component {
    render() {
        return (
            <RegistryPage>
                <h1>Registry</h1>
            </RegistryPage>
        )
    }
}

export default Registry