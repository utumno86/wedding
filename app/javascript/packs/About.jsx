import React, {Component} from 'react'
import styled from 'styled-components'

const AboutPage = styled.div`
    background-color: #4928A0;
    background-image: url("/assets/couple-bw.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 100vw;
    height: 100vh;
`;

// const Box = styled.div`
//     align-items: center;
//     background-color: #ffffff;
//     border-radius: 5px;
//     border: 2px solid #4928A0;
//     color: #4928A0;
//     display: flex;
//     flex-direction: column;
//     font-family: 'Lato', sans-serif;
//     justify-content: center;
//     margin: auto;
//     opacity: 0.5;
//     width: 70%;
// `;

// const Tagline = styled.h1`
//     text-align: center;
//     font-size: 3em;
// `;

// const Date = styled.h1`
//     font-family: 'Grand Hotel', cursive;
// `;


class About extends Component {
    render() {
        return (
            <AboutPage>
                <h1>About us</h1>
            </AboutPage>
        )
    }
}

export default About