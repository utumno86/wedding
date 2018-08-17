import React, { Component } from "react";
import styled from "styled-components";

const StPeteSection = styled.div`
  margin-right: 20px;
`;

const StPete = styled.h1`
  font-family: "Grand Hotel", cursive;
  font-size: 2em;
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

class StPeteThings extends Component {
  render() {
    const Liz = <Name>Liz: </Name>;
    const Mikey = <Name>Michael: </Name>;

    return <StPeteSection>
      <h3>Excursions</h3>
      <ol>
        <ListItem>
          <Thing>
            <a href="http://thedali.org/">The Dali Museum</a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/The+Dali+Museum,+1+Dali+Blvd,+St.+Petersburg,+FL+33701/@27.8646345,-82.6303125,12z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e191ce90a0c9:0x273b948e64dcd305!2m2!1d-82.6314354!2d27.7659901">1.3 miles</a></p>
          <p>
            {Mikey} "I have no idea why it's here, but this is the biggest collection of pieces by surrealist painter Salvador Dali this side of the Atlantic."
          </p>
          <p>
            {Liz} "It is within walking distance of both the
            venue and the hotel. During the summer they screen cult
            movies outside of it, and they might have holiday
            programming."
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="https://www.visitstpeteclearwater.com/communities/clearwater-beach">
              Clearwater Beach
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Clearwater+Beach,+Clearwater,+FL/@27.828638,-82.8477811,10.74z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e948cae1c0d5:0xa2a27a0b28eb9f12!2m2!1d-82.8270846!2d27.9775301">24.7 miles</a></p>
          <p>
            {Mikey} "Clearwater Beach is pretty consistently ranked amongst the best beaches in the country. They are also amongst the most popular and therefore crowded, though I don't know what that will be like in December. I've never quite gotten the hype (I prefer beaches that are less crowded like at Fort DeSoto below), but if you are a beach connoisseur this is probably the one you're interested in."
          </p>
          <p>
            {Liz} "A quick note about Snowbirds: Snowbirds are retired people who spend their winters in Florida, and with whom the native and year round Floridians have a love hate relationship. We appreciate what they do for our economy during "season" (November - April), but they also overcrowd the cities and beaches. Tampa and St Pete don't suffer as bad as many other places, and many Snowbirds go back north for the holidays, but be warned that many places like the beach might be really crowded."
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://www.stpete.org/attractions/sunken_gardens/index.php">Sunken Gardens</a>
          </Thing>
          <p> Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Sunken+Gardens,+4th+Street+North,+Saint+Petersburg,+FL/@27.7816944,-82.6501051,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e1657e0a9257:0x70d77b2754fc7557!2m2!1d-82.6384152!2d27.7895824">1.4 miles</a></p>
          <p>
            {Mikey} "Super retro tourist attraction that's just a big sinkhole with plants growing in it. I think they have a bird show. Was almost our wedding venue until we saw the price tag. Also probably within walking distance of the hotel."
          </p>
          <p>
            {Liz} "If you like kitchy Old Florida things, you must check out the Sunken Gardens. You can often find ticket deals on Groupon.  Don't forget to take your picture in front of the sign!"</p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://www.haslams.com/">Haslam's Book Store</a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Haslam's+Book+Store+Inc,+Central+Avenue,+Saint+Petersburg,+FL/@27.773289,-82.6597888,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e232212c1161:0xa7ac43480f12e1a2!2m2!1d-82.6608265!2d27.7713333!3e2">1.5 miles</a></p>
          <p>
            {Mikey} "Old, Massive used book store, and my favorite book store in the bay area. Reminds me of The Strand in New York."
          </p>
          <p>
            {Liz} "This is just down the road from <a href="http://www.suncoast.io">Suncoast Developers Guild</a>, which is the new code school based on The Iron Yard which Michael and I attended.  I host meet ups and teach kids how to code there, so if you're at Haslam's on a weekday, you should stop by and check it out."
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://www.pinellascounty.org/park/05_ft_desoto.htm">Fort Desoto Park</a>
          </Thing>
          <p>Distance form Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Fort+De+Soto+Park,+Saint+Petersburg,+FL/@27.6536406,-82.7354588,12z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c31b5b92af0bbb:0xa872b4e4c3759544!2m2!1d-82.7189421!2d27.6326329" >14.5 miles</a></p>
          <p>
            {Mikey} "Fort De Soto has a cool Spanish-American War era fort as well as some pretty pristine beaches. It also tends to not be as crowded as Clearwater Beach."
          </p>
          <p>
            {Liz}  "Other beach options include St Pete Beach and Treasure  Island less than 9 miles away from the Shuffleboard Club which are very nice as well."
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="https://en.wikipedia.org/wiki/Sunshine_Skyway_Bridge">Sunshine Skyway Bridge</a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Sunshine+Skyway+Bridge,+Interstate+275,+Saint+Petersburg,+FL/@27.6989493,-82.7297206,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c31be448040d33:0x80be62b805455b74!2m2!1d-82.6557137!2d27.6204349">13.4 miles</a></p>
          <p>
            {Mikey} "If you're into bridges, and I know you are, this one's a doozie. A bit weird to tell you take a big bridge across the bay just to turn around and come back, but there's not much of interest on the other side and the view and the bridge are totally worth it."
          </p>
          <p>
            {Liz} "The other side of that bridge leads you to Bradenton where Mikey and I were met after one of my roller derby bouts.  There's some cool things to do there, so if you're interested in knowing more let me know."
          </p>
        </ListItem>
      </ol>
      <h3>Restaurant</h3>
      <ol>
        <ListItem>
          <Thing>
            <a href="https://hollanderhotel.com/the-tap-room/">
              The Tap Room At The Hollander Hotel
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Tap+Room+at+the+Hollander+Hotel,+421+4th+Ave+N,+St.+Petersburg,+FL+33701/@27.7758516,-82.6410194,18z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e1786cf61693:0x53981c5ce5b456cc!2m2!1d-82.6391171!2d27.7767796">0.3 miles</a></p>
          <p>
            {Mikey} "Part of the reason we suggest you book rooms at The Hollander/ The Avalon is that the Hollander Restaurant is solid and within walking distance of the wedding site."
          </p>
          <p>
            {Liz} ""
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="https://www.ichicoroane.com/">
              Ichicoro Ane
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Ichicoro+Ane,+1st+Avenue+South,+Saint+Petersburg,+FL/@27.7731295,-82.6410408,16.94z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e19ca165be59:0x211aa19994ab5774!2m2!1d-82.6364156!2d27.7701595">0.6 miles</a></p>
          <p>
            {Mikey} "Sweet ramen place in downtown St. Pete. As a bonus, the building it's in is the former location of The Iron Yard, the code school that Liz and I both went to."
          </p>
          <p>
            {Liz} ""
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://www.no9burgers.com/">
              Engine No. 9
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Engine+No.+9,+Doctor+Martin+Luther+King+Junior+Street+North,+Saint+Petersburg,+FL/@27.7734705,-82.6468954,16.01z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e180c1fa091f:0x5b32d7a4616936d!2m2!1d-82.6469799!2d27.7718291">0.6 miles</a></p>
          <p>
            {Mikey} "Really solid place for craft burgers."
          </p>
          <p>
            {Liz} ""
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://themoonunderwater.com/">
              The Moon Under Water
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/The+Moon+Under+Water,+Beach+Drive+Northeast,+Saint+Petersburg,+FL/@27.7756627,-82.6409145,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e17607255479:0xcf1eac14502f2b46!2m2!1d-82.6322671!2d27.7758476">0.7 miles</a></p>
          <p>
            {Mikey} "British-style pub with tremendous curry dishes along with more traditional British fare. Located in one of the big bayshore tourist destinations in downtown St. Pete."
          </p>
          <p>
            {Liz} ""
          </p>
        </ListItem>
        <ListItem>
          <Thing>
            <a href="http://www.redmesamercado.com/">
              Red Mesa Mercado
            </a>
          </Thing>
          <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Red+Mesa+Mercado,+1st+Avenue+North,+Saint+Petersburg,+FL/@27.7736237,-82.6486994,16z/data=!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2e22a394f625d:0x908ca7ec69a7fa56!2m2!1d-82.650074!2d27.771715">0.8 miles</a></p>
          <p>
            {Mikey} "Solid California-style Mexican food. Not to be confused with <a href="https://www.redmesacantina.com/">Red Mesa Cantina</a>, their Tex Mex and bar branch which neither Liz nor I are particularly fans of."
          </p>
          <p>
            {Liz} ""
          </p>
        </ListItem>
      </ol>
    </StPeteSection>;
  }
}

export default StPeteThings;