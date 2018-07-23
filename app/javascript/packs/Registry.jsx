import React, {Component} from 'react'
import styled from 'styled-components'

const RegistryPage = styled.div`
    background-color: #4928a0;
`;

const Box = styled.div`
    align-items: center;
    background-color: #f6f6f6f6;
    border-radius: 5px;
    border: 3px solid #4928a0;
    color: #4928a0;
    display: flex;
    flex-direction: column;
    font-family: "Lato", sans-serif;
    justify-content: center;
    height: 100vh;
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
                <Box>
                    <Tagline>Registry information coming soon</Tagline>
                </Box>
            </RegistryPage>
        )
    }
}

export default Registry