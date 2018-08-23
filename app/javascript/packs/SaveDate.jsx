import React, {Component} from 'react'
import styled from 'styled-components'

const HomePage = styled.div``;

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

const footnote = styled.p`

`;

const Section = styled.div`
    @media (max-width: 599px) {
        width: 100%;
        margin: 1em;
        padding: 1em;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 599px) {
        flex-direction: row;
        display: flex;
        justify-content: center;
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
                    <Row>

                        <Section>
                            <Title>Location:</Title>
                            <p> 
                                <a href="http://stpeteshuffle.com/">
                                    St. Pete ShuffleBoard Club
                                </a>
                            </p>
                            <p>
                                559 Mirror Lake Dr. North
                            </p>
                            <p>
                                St. Petersburg, FL 33701
                            </p>
                            <p>
                                Dress: Garden party
                            </p>
                        </Section>
                        <Section>
                            <Title>Schedule:</Title>
                            <p> Arrival: 3:00pm</p>
                            <p>Ceremony: 3:30pm</p>
                            <p>Cocktail Hour*: 4-5PM</p>
                            <p>Taco Bar: 5:00pm</p>
                            <p>Shuffleboard and dancing till 10pm</p>
                        </Section>
                    </Row>
                    <Row>
                        <Section>
                            <Info>
                                *We will be providing both alcoholic and non-alcoholic drinks, but the laws involving the Shuffleboard Club allow you to BYOB if you prefer. 
                            </Info>
                        </Section>
                    </Row>
                </Box>

            </div>
        )
    }
}

export default SaveDate