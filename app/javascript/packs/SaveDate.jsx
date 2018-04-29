import React, {Component} from 'react'
import styled from 'styled-components'

const SaveDatePage = styled.div`
    background-color: #4928A0;
    background-image: url("/assets/couple-bw.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
`;

const Box = styled.div`
    align-items: center;
    background-color: #ffffff;
    opacity: 0.5;
    border-radius: 5px;
    border: 2px solid #4928A0;
    color: #4928A0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    justify-content: center;
    margin: auto;
    width: 70%;
`;

const Tagline = styled.h1`
    text-align: center;
    font-size: 3em;
`;

const Date = styled.h1`
    font-family: 'Grand Hotel', cursive;
`;


class SaveDate extends Component {
    render() {
        return (
            // <div id='saveDate'>
            //     <h1 className='tagline'> There's Magic in the Night </h1>
            //     <h1>Liz and Michael</h1>
            //     <h1 className='date'>December 22, 2018</h1>
            //     <h1 className='date'> St. Pete Shuffle Board Club</h1>
            // </div>
            <SaveDatePage>
                <Box>
                    <Tagline>There's Magic in the Night</Tagline>
                    <h1>Liz and Michael</h1>
                    <Date>December 22, 2018</Date>
                    <Date>St. Pete ShuffleBoard Club</Date>
                </Box>
            </SaveDatePage>
        )
    }
}

export default SaveDate