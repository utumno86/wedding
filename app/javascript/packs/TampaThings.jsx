import React, { Component } from 'react'
import styled from 'styled-components'

const TampaSection = styled.div`
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

class TampaThings extends Component {
  render() {
    return <TampaSection>
      <Tagline>Tampa Side</Tagline>
      <ol>
        <li>
          <div>
            <Thing>
              <a href="http://tampatheatre.org/">Tampa Theatre</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 22.9 miles.</p>
            <p>
              A restored Moorish Art Deco oddity from the 30s, the Tampa Theatre
              is probably the coolest building in Tampa, and one of our
              favorites. They usually do special holiday movie screenings every
              Friday during December. Keep an eye out for <b>Die Hard</b>,{" "}
              <b>Love Actually</b> or <b>White Christmas</b>.
            </p>
          </div>
        </li>
        <li>
          <div>
            <Thing>
              <a href="https://buschgardens.com/tampa/">Busch Gardens</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 31 miles.</p>
            <p>
              Come see the place where Michael worked in high school and why he
              doesn't like amusement parks! Busch Gardens started out as a small
              annex to the Busch Brewery, but has grown into "the Kmart of
              amusement parks". We don't go often but it has a pretty solid zoo
              and some great roller coasters. As a bonus this is in walking
              distance from our actual house--we can hear the screams as people
              drop down the coasters! If you want to swing by the week before or
              after the wedding, you can meet us for breakfast or dinner and
              potentially park your car in our yard.
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
            <p>Distance from Shuffleboard Club: 18.5 miles.</p>
            <p>
              This is billed as the longest continuous sidewalk in the world,
              but we've never seen the actual numbers on that. People bike and
              jog on it, but even if you are allergic to exercise you probably
              should drive down it as it is a pretty iconic view. As a bonus,
              the Gasparilla pirate ship is usually docked there out of
              Gasparilla season. The Gasparilla pirate ship served as the set
              for a certain film Liz is happy to tell you about--but no it's not
              the Disney one.
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
            <p>Distance from Shuffleboard Club: 23.4 miles.</p>
            <p>
              Another awesome 1930s Moorish art deco building, the Henry B.
              Plant museum (formerly the Tampa Bay Hotel) on the University of
              Tampa campus is another iconic tampa sight. Michael has never been
              in side but Liz helped film a commercial there at her previous
              job. You should still drive by it because it's a cool looking
              building.
            </p>
          </div>
        </li>
      </ol>
    </TampaSection>;
  }
}

export default TampaThings;