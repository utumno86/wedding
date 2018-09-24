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
                    <Tagline>Registry</Tagline>
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