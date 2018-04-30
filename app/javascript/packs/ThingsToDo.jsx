import React, {Component} from 'react'
import styled from 'styled-components'

const ThingsToDoPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
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
    padding: 1em;
    opacity: 0.5;
    width: 70%;
`;

const Tagline = styled.h1`
    text-align: center;
    font-size: 2em;
    margin: 0;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
`;

const Header = styled.h1`
    font-family: 'Grand Hotel', cursive;
    font-size: 3em;
`;

const Thing = styled.h2`
    font-size: 1em;
`;

// const HeaderImage = styled.img`
//     width: 10%;
//     height: 10%;
//     padding: 0.5em;
// `;

// const HeaderImage2 = HeaderImage.extend`
//     transform: scaleX(-1);
// `;



class ThingsToDo extends Component {
    render() {
        return (
            <ThingsToDoPage>
                <Box>
                <HeaderWrapper>
                        {/* <HeaderImage src="/assets/06.png" /> */}
                        <Header>Things to do in the #OtherBayArea</Header>
                        {/* <HeaderImage2 src="/assets/06.png" /> */}
                    </HeaderWrapper>
                    <Tagline>
                        Tampa Side
                    </Tagline>
                    <ol>
                        <li>
                            <div>
                                <Thing>
                                    <a href="http://tampatheatre.org/">Tampa Theatre</a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 22.9 miles.
                                </p>
                                <p>
                                    A restored Moorish Art Deco oddity from the 30s, the Tampa Theatre is probably the coolest building in Tampa, and one of our favorites. They usually do special holiday movie screenings every Friday during December.  Keep an eye out for <b>Die Hard</b>, <b>Love Actually</b> or <b>White Christmas</b>.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Thing>
                                    <a href="https://buschgardens.com/tampa/">Busch Gardens</a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 31 miles.
                                </p>
                                <p>
                                    Come see the place where Michael worked in high school and why he doesn't like amusement parks! Busch Gardens started out as a small annex to the Busch Brewery, but has grown into "the Kmart of amusement parks". We don't go often but it has a pretty solid zoo and some great roller coasters.  As a bonus this is in walking distance from our actual house--we can hear the screams as people drop down the coasters! If you want to swing by the week before or after the wedding, you can meet us for breakfast or dinner and potentially park your car in our yard.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Thing>
                                    <a href="https://en.wikipedia.org/wiki/Bayshore_Boulevard">
                                        Bayshore Boulevard
                                    </a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 18.5 miles.
                                </p>
                                <p>
                                    This is billed as the longest continuous sidewalk in the world, but we've never seen the actual numbers on that. People bike and jog on it, but even if you are allergic to exercise you probably should drive down it as it is a pretty iconic view. As a bonus, the Gasparilla pirate ship is usually docked there out of Gasparilla season.  The Gasparilla pirate ship served as the set for a certain film Liz is happy to tell you about--but no it's not the Disney one.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Thing>
                                    <a href="http://www.plantmuseum.com/">
                                        University of Tampa/Henry B. Plant Museum
                                    </a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 23.4 miles.
                                </p>
                                <p>
                                    Another awesome 1930s Moorish art deco building, the Henry B. Plant museum (formerly the Tampa Bay Hotel) on the University of Tampa campus is another iconic tampa sight. Michael has never been in side but Liz helped film a commercial there at her previous job.  You should still drive by it because it's a cool looking building.
                                </p>
                            </div>
                        </li>
                    </ol>
                    <Tagline>
                        St Pete Side
                    </Tagline>
                    <ol>
                        <li>
                            <div>
                                <Thing>
                                    <a href="http://thedali.org/">
                                        The Dali Museum
                                    </a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 1.3 miles.
                                </p>
                                <p>
                                    No idea why it's here, but this is the biggest collection of pieces by surrealist painter Salvador Dali this side of the Atlantic. Bonus: it is within walking distance of both the venue and the hotel.  During the summer they screen cult movies outside of it, and the might have holiday programming.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Thing>
                                    <a href="https://www.visitstpeteclearwater.com/communities/clearwater-beach">
                                        Clear Water Beach
                                    </a>
                                </Thing>
                                <p>
                                    Distance from Shuffleboard Club: 24.7 miles.
                                </p>
                                <p>
                                    Clearwater Beach is pretty consistently ranked amongst the best beaches in the country. They are also amongst the most popular and therefore crowded*. We prefer beaches that are less crowded (like Fort DeSoto below), but if you are a beach connoisseur this is probably the one you're interested in.   Other beach options include St Pete Beach and Treasure Island less than 9 miles away from the Shuffleboard Club which are very nice as well. 
                                </p>
                                <p>
                                    A quick note about Snowbirds:  Snowbirds are retired people who spend their winters in Florida, and with whom the native and year round Floridians have a love hate relationship. We appreciate what they do for our economy during "season" (November - April), but they also overcrowd the cities and beaches.  Tampa and St Pete don't suffer as bad as many other places, and many Snowbirds go back north for the holidays, but be warned that many places like the beach might be really crowded.
                                </p>
                            </div>
                        </li>
                    </ol>

                </Box>
            </ThingsToDoPage>
        )
    }
}

export default ThingsToDo