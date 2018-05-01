import React, {Component} from 'react'
import styled from 'styled-components'

const SaveDatePage = styled.div`
    background-image: url("/assets/couple-bw1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 100vh;
    width: 100vw;
`;

const Box = styled.div`
    align-items: center;
    background-color: #f6f6f6;
    border-radius: 5px;
    border: 2px solid #4928A0;
    color: #4928A0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    justify-content: center;
    margin: auto;
    opacity: 0.75;
    width: 70%;
`;

const Tagline = styled.h1`
    text-align: center;
    font-size: 3em;
    opacity: 1;
`;

const Date = styled.h1`
    font-family: 'Grand Hotel', cursive;
    opacity: 1;
`;

const Names = styled.h1`
    opacity: 1;
`;


class SaveDate extends Component {
    render() {
        return (
            <SaveDatePage>
                <Box>
                    <Tagline>There's Magic in the Night</Tagline>
                    <Names>Liz and Michael</Names>
                    <Date>December 22, 2018</Date>
                    <Date>St. Pete ShuffleBoard Club</Date>
                </Box>
            </SaveDatePage>
        )
    }
}

export default SaveDate