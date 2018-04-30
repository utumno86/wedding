import React, {Component} from 'react'
import styled from 'styled-components'

const PlacesToStayPage = styled.div`
    background-color: #4928A0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Box = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    border: 2px solid #4928A0;
    color: #4928A0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    justify-content: center;
    margin: auto;
    padding: 0 1em 0 1em;
    opacity: 0.5;
    width: 70%;
`;

const Hotel = styled.h2`
    font-size: 2em;
`;

const Header = styled.h1`
    font-family: 'Grand Hotel', cursive;
    font-size: 3em;
`;


class PlacesToStay extends Component {
    render() {
        return (
            <PlacesToStayPage>
                <Box>
                    <Header>Places to stay</Header>
                    <Hotel>
                        <a href="https://hollanderhotel.com/">The Hollander Hotel </a>
                    </Hotel>
                    <p>
                        We have a small block of rooms at <a href="https://hollanderhotel.com/">The Hollander Hotel </a> in Downtown St Pete. Simply say you are with our wedding when you call 727-873-7900.  The Hollander is less than a 10 minute walk from the Shuffleboard Club and provides shuttles to Downtown St Pete.  We will be hosting a relaxed rehearsal dinner in one of the poolside Cabanas Friday night for all guests who can make it.  We will also be enjoying their Sunday Brunch and Bloody Mary bar the day after, so please join us if you can.  For those who are up for it, The Hollander also hosts poolside yoga on Sundays.  We won't be there, but the weather should be beautiful for it!
                    </p>
                    <Hotel>
                        <a href="https://www.avalonstpetersburg.com/about/">The Avalon </a>
                    </Hotel>
                    <p>
                        Next door to the Hollander is their sister hotel, the <a href="https://www.avalonstpetersburg.com/about/"> Avalon </a>.  They say it's a "hip place to lay your head" and we agree!  We stayed there for Liz's birthday last year and highly recommend it. If you stay at the Avalon you have access to the Hollander pool and shuttle service. 
                    </p>
                    <Hotel>
                        <a href="http://www.marriott.com/hotels/travel/tpasd-courtyard-st.-petersburg-downtown/">The Courtyard - Marriot</a>
                    </Hotel>
                    <p>
                        The Courtyard Marriot is across the street from the St Pete Shuffleboard Club.  We found it was a bit more expensive than The Hollander and Avalon, but we still recommend it.
                    </p>
                    <Hotel>
                        Other Hotels and Trolley Service
                    </Hotel>
                    <p>
                        There are many other hotels and bed and breakfasts in Downtown St Pete so feel free to look around.  We will be providing a trolley to help guests get to the Shuffleboard Club from the Hollander.  Let us know if you book elsewhere and we can see about arranging for the Trolley to pick up guests from another location as well.  
                    </p>
                </Box>
            </PlacesToStayPage>
        )
    }
}

export default PlacesToStay