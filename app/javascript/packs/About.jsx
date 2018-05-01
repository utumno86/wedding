import React, {Component} from 'react'
import styled from 'styled-components'

const AboutPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Box = styled.div`
  align-items: center;
  background-color: #f6f6f6f6;
  border-radius: 5px;
  border: 2px solid #4928a0;
  color: #4928a0;
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  justify-content: center;
  margin: auto;
  opacity: 0.5;
  width: 70%;
`;

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
                <Box>
                    <h1>About us</h1>
                    <h2>How We Met - Michael</h2>
                    <p>Story</p>
                    <h2>How We Met - Liz</h2>
                    <p>Story</p>
                </Box>
            </AboutPage>
        )
    }
}

export default About