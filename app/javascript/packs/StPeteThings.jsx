import React, { Component } from "react";
import styled from "styled-components";

const StPeteSection = styled.div`
  justify-content: center;
  margin: 1em;
`;

const StPete = styled.h1`
  font-family: "Grand Hotel", cursive;
  font-size: 2em;
  text-align: center;
`;

const Thing = styled.h3``;

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

class StPeteThings extends Component {
  render() {
    const Liz = <Name>Liz: </Name>;
    const Mikey = <Name>Michael: </Name>;

    return <StPeteSection>
        <HeaderWrapper>
          <HeaderImage src="/assets/06.png" />
            <StPete>St Pete Side</StPete>
          <HeaderImage2 src="/assets/06.png" />
        </HeaderWrapper>
        
        <ol>
          <ListItem>
            <Thing>
              <a href="http://thedali.org/">The Dali Museum</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 1.3 miles.</p>
            <p>
              {Mikey}  I have no idea why it's here, but this is the biggest collection of pieces by surrealist painter Salvador Dali this side of the Atlantic. 
            </p>
            <p>
              {Liz} It is within walking distance of both the
              venue and the hotel. During the summer they screen cult
              movies outside of it, and they might have holiday
              programming.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://www.visitstpeteclearwater.com/communities/clearwater-beach">
                Clear Water Beach
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: 24.7 miles.</p>
            <p>
              {Mikey} Clearwater Beach is pretty consistently ranked amongst the best beaches in the country. They are also amongst the most popular and therefore crowded, though I don't know what that will be like in December. I've never quite gotten the hype (I prefer beaches that are less crowded like at Fort DeSoto below), but if you are a beach connoisseur this is probably the one you're interested in.
            </p>
            <p>
              {Liz} A quick note about Snowbirds: Snowbirds are retired people who spend their winters in Florida, and with whom the native and year round Floridians have a love hate relationship. We appreciate what they do for our economy during "season" (November - April), but they also overcrowd the cities and beaches. Tampa and St Pete don't suffer as bad as many other places, and many Snowbirds go back north for the holidays, but be warned that many places like the beach might be really crowded.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://www.stpete.org/attractions/sunken_gardens/index.php">Sunken Gardens</a>
            </Thing>
            <p> Distance from Shuffleboard Club: 1.4 miles</p>
            <p>
              {Mikey} Super retro tourist attraction that's just a big sinkhole with plants growing in it. I think they have a bird show. Was almost our wedding venue until we saw the price tag. Also probably within walking distance of the hotel.
            </p>
            <p>
              {Liz} If you like kitchy Old Florida things, you must check out the Sunken Gardens. You can often find ticket deals on Groupon.  Don't forget to take your picture in front of the sign!</p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://www.haslams.com/">Haslam's Book Store</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 1.5 miles</p>
            <p>
              {Mikey} Old, Massive used book store, and my favorite book store in the bay area. Reminds me of The Strand in New York.
            </p>
            <p>
              {Liz} I've actually not been here, this is what I get for having him come up with the things to do list.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://www.pinellascounty.org/park/05_ft_desoto.htm">Fort Desoto Park</a>
            </Thing>
            <p>Distance form Shuffleboard Club: 14.5 miles</p>
            <p>
              {Mikey} Fort De Soto has a cool Spanish-American War era fort as well as some pretty pristine beaches. It also tends to not be as crowded as Clearwater Beach.
            </p>
            <p>
              {Liz}  Other beach options include St Pete Beach and Treasure  Island less than 9 miles away from the Shuffleboard Club which are very nice as well.
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Sunshine_Skyway_Bridge">Sunshine Skyway Bridge</a>
            </Thing>
            <p>Distance from Shuffleboard Club: 13.4 miles</p>
            <p>
              {Mikey} If you're into bridges, and I know you are, this one's a doozie. A bit weird to tell you take a big bridge across the bay just to turn around and come back, but there's not much of interest on the other side and the view and the bridge are totally worth it.
            </p>
            <p>
              {Liz} The otherside of that bridge leads you to Bradenton where Mikey and I were met after one of my roller derby bouts.  There's some cool things to do there, so if you're interested in knowing more let me know.
            </p>
          </ListItem>
        </ol>
      </StPeteSection>;
  }
}

export default StPeteThings;


