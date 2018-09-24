import React, {Component} from 'react'
import styled from 'styled-components'

const RegistryPage = styled.div`
    background-color: #4928a0;
`;

const RegistryHeader = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20vh;
    display: flex;
`;

const Tagline = styled.h1`
    align-items: center;
    color: #f6f6f6f6
    font-family: 'Grand Hotel', cursive;
    font-size: 3em;
    margin: auto;
    text-align: center;
`;

const Box = styled.div`
    background-color: #f6f6f6f6;
    border-radius: 5px;
    border: 3px solid #4928a0;
    color: #4928a0;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
`;


const Date = styled.h1`
    font-family: 'Grand Hotel', cursive;
`;


class Registry extends Component {
    render() {
        return (
            <RegistryPage>
                <RegistryHeader>
                    <Tagline>Registry</Tagline>
                </RegistryHeader>
                <Box>
                    <p>
                        As many of you know, Michael inherited the house his grandparents built in the 1950s.  It is a wonderful house that we adore and appreciate, but due to its age, it needs quite a bit of upkeep.  Last year, we redid the bathroom, which had many soft spots.  Three years ago, Michael and his father replaced the roof.  More soft spots mean the floor needs to be replaced throughout the house, the windows needs replacing, and the slowly collapsing garage houses the water pump which is powered by an extension cord from the house.
                    </p>
                    <p>
                        Although our registry is available on <a href="https://www.amazon.com/wedding/share/MikeandLiz">Amazon</a>, we would also appreciate monetary gifts towards our housing fund.  However, any gifts, whether towards the housing fund or from the official registry is appreciated.  
                    </p>
                </Box>
            </RegistryPage>
        )
    }
}

export default Registry