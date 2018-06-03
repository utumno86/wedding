import React, { Component } from "react";
import styled from "styled-components";

const FartherSection = styled.div`
  justify-content: center;
  margin: 1em;
`;

const Farther = styled.h1`
  font-family: "Grand Hotel", cursive;
  font-size: 2em;
  text-align: center;
`;

const Thing = styled.h3`
`;

const ListItem = styled.li`
  margin: 1em;
`;

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

class FartherAfield extends Component {
  render() {
    const Liz = <Name>Liz</Name>;
    const Mikey = <Name>Michael</Name>;

    return <FartherSection>
        <HeaderWrapper>
          <HeaderImage src="/assets/06.png" />
            <Farther>Farther Afield</Farther>
          <HeaderImage2 src="/assets/06.png" />
        </HeaderWrapper>
        
        <ol>
          <ListItem>
            <Thing>
              <a href="https://disneyworld.disney.go.com/">Walt Disney World</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 90 miles.</p>
            <p>
                {Mikey}: "I don't like to promote the idea that the only reason to come to Florida is Disney, but I'm realistic. I know one of the draws of our wedding is for people who want to go visit the rat."
            </p>
            <p>
                {Liz}: "Drink around the world in Epcot."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://www.universalorlando.com/web/en/us/index.html#subnav-a">
                Universal Studios
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: 100 miles.</p>
            <p>
                {Mikey}: "Disney's main competition in Orlando. It's been probably a decade since I was there but I remember Islands of Adventure being quite good. I think there's some Harry Potter thing there now.""
            </p>
            <p>
                {Liz}: "I don't like roller coasters and I haven't read Harry Potter so I've never been."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://boktowergardens.org/">Bok Tower</a>
            </Thing>
            <p> Distance from Shuffleboard Club: 1.4 miles</p>
            <p>
                {Mikey} There are a bunch of attractions in Florida that are basically some rich dude went a bit crazy and built an enormous monument in the middle of nowhere for no reason. Bok Tower is one of my favorites. It's an enormous Art Deco tower built on the highest hill in "peninsular" Florida. Awesome gardens designed by Frederick Law Olmsted. Also has a 60 bell carillon at the top, so stay for one of the short daily concerts. Side note: Liz and I also thought about getting married here but decided the location was more remote than we wanted to deal with. While you're there check out Spook Hill, which isn't like good or anything but is a pretty amazing slice of Americana.
            </p>
            <p>
                {Liz} It's very pretty, and we were there on Cinco de Mayo so we got to hear <b>La Bamba</b> on the carillon.  I'm sure there will be some good holiday music in December.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://www.haslams.com/">Haslam's Book Store</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 88.4 miles</p>
            <p>Michael's favorite book store in the bay area is this old, massive used book store.  It reminds him of The Strand in New York.</p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://solomonscastle.com/">Solomon's Castle</a>
            </Thing>
            <p>Distance form Shuffleboard Club: 69 miles</p>
            <p>
                {Mikey} In the same weird roadside attraction vein as the above, here is a massive building full of weird sculptures made entirely out of garbage. The catch here is that the eccentric creator, Howard Solomon, actually lives there with his family. As a result you pretty much have to sign on to go take a tour of the house, but totally worth it.
            </p>
            <p>
                {Liz} Haven't been here either... but I'm sure I will before the wedding.  Michael is always talking about it and admittedly, I confused it with the Coral Castle and Bok Tower until I went to those locations.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Tarpon_Springs,_Florida">Tarpon Springs Sponge Docks</a>
            </Thing>
            <p>Distance form Shuffleboard Club: 32.7 miles</p>
            <p>
                {Mikey}  One of Liz and I's favorite day trips. Tarpon Springs is a town that was settled by Greek sponge divers in the 1900s and now has the highest concentration of Greek Americans in the U.S. You want to go there, follow signs for the sponge docks, park and stroll down Dodecanese Blvd. checking out all of cool curio shops and truly outstanding Greek cuisine. Highlights are our favorite restaurant there, Hellas, the best in kitschy tourist attractions Spongeorama, and the sponge boat tours from the docks (there are dozens). While you are in town check out the cool Eastern Orthodox Church, St. Nicholas Cathedral.
            </p>
            <p>
                {Liz} Tarpon Springs is really cool.  You'll find great food and a fun atmosphere in this hidden gem.  Also, all the greek salads in florida include a scoop of potato salad on top.  I never had that before I moved here, but it's tasty.
            </p>
          </ListItem>
        </ol>
      </FartherSection>;
  }
}

export default FartherAfield;


