import React, {Component} from 'react'
import styled from 'styled-components'

const SaveDateHeader = styled.div`
    background-image: url("/assets/couple-bw1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;

`;

const Box = styled.div`
    background-color: #f6f6f6f6;
    border-radius: 5px;
    border: 3px solid #4928a0;
    color: #4928a0;
    justify-content: center;
`;

const Tagline = styled.h1`
    opacity: 1;
    font-family: 'Grand Hotel', cursive;
    text-align: center;
`;

const Date = styled.h2`
    text-align: center;
    font-family: "Lato", sans-serif;
`;

const Names = styled.h1`
    text-align: center;
    font-family: 'Grand Hotel', cursive;
`;

const Title = styled.h2`
    font-family: 'Grand Hotel', cursive;

`;

const Info = styled.p`
    font-size: 20px;
`;

const Footnote = styled.p`
    margin: 1em;
    margin-top: 3em;
`;

const Section = styled.div`
    text-align: center;
    margin: 1em;
    margin-top: 3em;
    @media (max-width: 599px) {
        width: 100%;
        text-align: center;
    }
`;


class SaveDate extends Component {
    render() {
        return (
            <div className="homePage">
                <SaveDateHeader />
                <Box>
                    <Tagline>There's Magic in the Night</Tagline>
                    <Names>Liz and Michael</Names>
                    <Date>December 22, 2018</Date>
                    <Section>
                        <Title>Location:</Title>
                        <Info> 
                            <a href="http://stpeteshuffle.com/">
                                St. Pete ShuffleBoard Club
                            </a>
                        </Info>
                        <Info>
                            559 Mirror Lake Dr. North
                        </Info>
                        <Info>
                            St. Petersburg, FL 33701
                        </Info>
                        <Info>
                            Dress: Garden party
                        </Info>
                    </Section>
                    <Section>
                        <Title>Schedule:</Title>
                        <Info> Arrival: 3:00pm</Info>
                        <Info>Ceremony: 3:30pm</Info>
                        <Info>Cocktail Hour*: 4-5PM</Info>
                        <Info>Taco Bar: 5:00pm</Info>
                        <Info>Shuffleboard and dancing till 10pm</Info>
                    </Section>
                    <Footnote>
                        *We will be providing both alcoholic and non-alcoholic drinks, but the laws involving the Shuffleboard Club allow you to BYOB if you prefer. 
                    </Footnote>
                </Box>

            </div>
        )
    }
}

export default SaveDate