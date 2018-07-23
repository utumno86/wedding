import React, { Component } from 'react'
import styled from 'styled-components'

const TampaSection = styled.div`
  margin-right: 20px;
`;

const Tagline = styled.h1`
  font-family: "Grand Hotel", cursive;
  font-size: 2.5em;
  text-align: center;
`;

const Thing = styled.h3``;

const ListItem = styled.li``;

const Name = styled.span`
    font-family: "Grand Hotel", cursive;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
`;

const HeaderImage = styled.img`
    width: 10%;
    height: 10%;
    padding: 0.5em;
`;

const HeaderImage2 = HeaderImage.extend`
    transform: scaleX(-1);
`;

class TampaThings extends Component {
  render() {
    const Liz = <Name>Liz: </Name>;
    const Mikey = <Name>Michael: </Name>;

    return <TampaSection>
      {/* <HeaderWrapper>
        <HeaderImage src="/assets/06.png" />
          <Tagline>Tampa Side</Tagline>
        <HeaderImage2 src="/assets/06.png" />
      </HeaderWrapper> */}
      <ol>
        <ListItem>
          <div>
            <Thing>
              <a href="http://tampatheatre.org/">Tampa Theatre</a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Tampa+Theatre,+711+N+Franklin+St,+Tampa,+FL+33602/@27.8646345,-82.6303125,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c489880ac7f7:0xb7d9e2439de8207f!2m2!1d-82.458954!2d27.95034">22.9 miles</a></p>
            <p>
              {Mikey} "A restored Moorish Art Deco oddity from the 30s, the Tampa Theatre is probably the coolest building in Tampa, and one of Liz and I's favorites. See a movie or a show or something."
            </p>
            <p>
              {Liz} "They usually do special holiday movie screenings every
              Friday during December. Keep an eye out for <b>Die Hard</b>, <b>Love Actually</b> or <b>White Christmas"</b>.
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://buschgardens.com/tampa/">Busch Gardens</a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Busch+Gardens+Tampa+Bay,+N+McKinley+Drive,+Tampa,+FL/@27.9062359,-82.6802528,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c64f0d381a85:0xa8a5fe0830e10852!2m2!1d-82.4211522!2d28.0379618">31 miles</a></p>
            <p>
              {Mikey} "Come see the place where I worked the whole time I was in high school! Started out as a small annex to the Busch Brewery, has grown into "the Kmart of amusement parks". I haven't been in years, but they used to have a pretty solid zoo and actually great roller coasters. As a bonus this is in walking distance from out actual house so if you want to swing by the week before or after the wedding, you can meet us for breakfast or dinner and potentially park your car in our yard."
            </p>
            <p>
              {Liz} "I've only been there for Hall-o-Scream and it'll be over by the December.  We can hear the screams on the roller coasters from our house, which is entertaining."
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Bayshore_Boulevard">
                Bayshore Boulevard
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Bayshore+Blvd,+Tampa,+FL/@27.8647935,-82.6315126,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2dca081e55cfb:0xd8f4f03d5bfc455b!2m2!1d-82.4857318!2d27.8867803">18.5 miles</a></p>
            <p>
              {Mikey} "Billed as the longest continuous sidewalk in the world, but I've never seen the actual numbers on that. People bike and jog on it, but even if you are allergic to exercise you probably should drive down it as it is a pretty iconic view. As a bonus, the Gasparilla pirate ship is usually docked there out of Gasparilla season."
            </p>
            <p>
              {Liz} "Let's start with Gasparilla is a massive celebration in honor of when a pirate crew raped and pillaged Tampa.  Only, the pirate is completely fabricated and this is the ship where <i><b>Pirates</b></i> was filmed. No, not the Disney one..."
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.plantmuseum.com/">
                University of Tampa/Henry B. Plant Museum
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Henry+B.+Plant+Museum,+West+Kennedy+Boulevard,+Tampa,+FL/@27.8646345,-82.6303125,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c48f50cea035:0xe4bfc9a636464c21!2m2!1d-82.464194!2d27.946538">23.4 miles</a></p>
            <p>
              {Mikey} "Another awesome 1930s Moorish art deco building, the Henry B. Plant museum (formerly the Tampa Bay Hotel) on the University of Tampa campus is another iconic Tampa sight. I've literally never been in side but you should still drive by it because it's a cool looking building."
            </p>
            <p>
              {Liz} "I have been inside, it's very red.  It's on the water with a park and just over the bridge from downtown Tampa. Since it's on a university campus you can wander around and check it out to some extent."
            </p>
          </div>
        </ListItem>
      </ol>
    </TampaSection>;
  }
}

export default TampaThings;