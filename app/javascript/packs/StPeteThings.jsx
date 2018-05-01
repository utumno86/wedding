import React, { Component } from 'react'
import styled from 'styled-components'

const StPeteSection = styled.div`
  justify-content: center;
  margin: 3em;
  width: 45%;
`;

const Tagline = styled.h1`
  font-family: "Grand Hotel", cursive;
  font-size: 2em;
  text-align: center;
`;

const Thing = styled.h2`
  font-size: 1em;
`;

class StPeteThings extends Component {
    render() {
        return <StPeteSection>
            <Tagline>St Pete Side</Tagline>
          
          </StPeteSection>;
    }
}

export default StPeteThings;

  {
    /* <ol>
              <li>
                <div>
                  <Thing>
                    <a href="http://thedali.org/">The Dali Museum</a>
                  </Thing>
                  <p>Distance from Shuffleboard Club: 1.3 miles.</p>
                  <p>
                    No idea why it's here, but this is the biggest
                    collection of pieces by surrealist painter Salvador
                    Dali this side of the Atlantic. Bonus: it is within
                    walking distance of both the venue and the hotel.
                    During the summer they screen cult movies outside of
                    it, and the might have holiday programming.
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
                  <p>Distance from Shuffleboard Club: 24.7 miles.</p>
                  <p>
                    Clearwater Beach is pretty consistently ranked
                    amongst the best beaches in the country. They are
                    also amongst the most popular and therefore
                    crowded*. We prefer beaches that are less crowded
                    (like Fort DeSoto below), but if you are a beach
                    connoisseur this is probably the one you're
                    interested in. Other beach options include St Pete
                    Beach and Treasure Island less than 9 miles away
                    from the Shuffleboard Club which are very nice as
                    well.
                  </p>
                  <p>
                    A quick note about Snowbirds: Snowbirds are retired
                    people who spend their winters in Florida, and with
                    whom the native and year round Floridians have a
                    love hate relationship. We appreciate what they do
                    for our economy during "season" (November - April),
                    but they also overcrowd the cities and beaches.
                    Tampa and St Pete don't suffer as bad as many other
                    places, and many Snowbirds go back north for the
                    holidays, but be warned that many places like the
                    beach might be really crowded.
                  </p>
                </div>
              </li>
            </ol> */
  }