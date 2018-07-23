import React, {Component} from 'react'
import styled from 'styled-components'

const HomePage = styled.div`
    background-color: #4928a0;
    font-size: 20px;
`;

const SaveDatePage = styled.div`
    background-image: url("/assets/couple-bw1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;
    display: flex;
`;

const Box = styled.div`
    align-items: center;
    background-color: #f6f6f6f6;
    border-radius: 5px;
    border: 3px solid #4928a0;
    color: #4928a0;
    font-family: "Lato", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Tagline = styled.h1`
    text-align: center;
    font-size: 50px;
    opacity: 1;
    font-family: 'Grand Hotel', cursive;
`;

const Date = styled.h2`
    font-size: 40px;
    text-align: center;
    font-family: "Lato", sans-serif;
`;

const Names = styled.h1`
    font-size: 50px;
    text-align: center;
    font-family: 'Grand Hotel', cursive;
`;

const Title = styled.h3`
    font-size: 30px;
    font-family: 'Grand Hotel', cursive;

`;
const Info = styled.p`
    font-size: 20px;
`;

const Section = styled.div`
    margin: 20px;
    padding: 10px;
    justify-content: center;
`;

const Row = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
`;


class SaveDate extends Component {
    render() {
        return (
            <HomePage>
                <SaveDatePage />
                <Box>
                    <Tagline>There's Magic in the Night</Tagline>
                    <Names>Liz and Michael</Names>
                    <Date>December 22, 2018</Date>
                    <Row>
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
                    </Row>
                    <Row>
                        <Section>
                            <Info>
                                *We will be providing both alcoholic and non-alcoholic drinks, but the laws involving the Shuffleboard Club allow you to BYOB if you prefer. 
                            </Info>
                        </Section>
                    </Row>
                </Box>

            </HomePage>
        )
    }
}

export default SaveDate