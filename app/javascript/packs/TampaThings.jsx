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
      <h3> Excursions </h3>
      <ol>
        <ListItem>
          <div>
            <Thing>
              <a href="http://tampatheatre.org/">Tampa Theatre</a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Tampa+Theatre,+711+N+Franklin+St,+Tampa,+FL+33602/@27.8646345,-82.6303125,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c489880ac7f7:0xb7d9e2439de8207f!2m2!1d-82.458954!2d27.95034">22.9 miles</a></p>
            <p>
              {Mikey} A restored Moorish Art Deco oddity from the 30s, the Tampa Theatre is probably the coolest building in Tampa, and one of Liz and I's favorites. See a movie or a show or something."
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
              {Mikey} "Billed as the longest continuous sidewalk in the world, but I've never seen the actual numbers on that. People bike and jog on it, but even if you are allergic to exercise you probably should drive down it as it is a pretty iconic view. Additionally, home to the most jaw-droppingly opulent homes in the city. As a bonus, the Gasparilla pirate ship is usually docked there out of Gasparilla season."
            </p>
            <p>
              {Liz} "Let's start with Gasparilla is a massive celebration in honor of when a pirate crew raped and pillaged Tampa. Only, the pirate is completely fabricated and this is the ship where <i><b>Pirates</b></i> was filmed. No, not the Disney one..."
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://www.plantmuseum.com/">
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
      <h3> Restaurants </h3>
      <ol>
        <ListItem>
          <div>
            <Thing>
              <a href="https://bernssteakhouse.com/">
                Bern's Steakhouse
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Bern's+Steak+House,+1208+S+Howard+Ave,+Tampa,+FL+33606/@27.8567714,-82.648501,11.93z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c36776c70529:0xa227de3eb98b5024!2m2!1d-82.4828518!2d27.9316028!3e0">21.0 miles</a></p>
            <p>
              {Mikey} "One of the most famous restaurants in Tampa, and one of our perennial birthday dinner destinations. A fantastic experience, melt in your mouth steak, extensive wine cellar (allegedly the largest in North America), and the Harry Waugh Dessert Room (to which you are escorted after dinner) is a goddamn national treasure. Be prepared to drop a couple hundred bucks on dinner, though."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.columbiarestaurant.com/">
                Columbia Restaurant
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Columbia+Restaurant,+East+7th+Avenue,+Tampa,+FL/@27.86576,-82.6175384,11.95z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c4524dbbc7cf:0x3e9c07c7be9bec05!2m2!1d-82.4350771!2d27.959959!3e0">24.6 miles</a></p>
            <p>
              {Mikey} "Located in historic Cuban/Italian community Ybor City and founded in 1905, The Columbia is allegedly the oldest restaurant in Florida. There are a couple of Columbia branches, but accept no substitute for the real one on 7th Avenue in Ybor. The building and atmosphere is awesome and don't miss out on the live Flamenco dancers on weeknights. The Columbia has always been better on atmosphere than on actual food, you can't go wrong with the 1911 Salad and the Bambino steak. Alternately they have a wide array of Spanish/Cuban cuisine. For more stuff to do in Ybor, check out "Bars" section."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.lateresitarestaurant.com/">
                La Teresita
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/La+Teresita+Restaurant,+W+Columbus+Dr,+Tampa,+FL/@27.8702164,-82.6515368,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c3978ac26ed1:0x8dbeb0f5bbd4c3bf!2m2!1d-82.4965192!2d27.9664481!3e0">24.6 miles</a></p>
            <p>
              {Mikey} "The Columbia makes up for mediocre food with atmosphere, but La Terisita is the opposite, with probably the best Cuban food in town. They have a ritzy-ish sit down restaurant but the real action is around the back entrance where they offer diner-style seating and cafeteria service of the same food at a discounted price."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://datztampa.com/">
                Datz
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Datz,+South+MacDill+Avenue,+Tampa,+FL/@27.8639589,-82.6498857,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c3465be05253:0x272b063a25eeab49!2m2!1d-82.493217!2d27.92194!3e0">22.7 miles</a></p>
            <p>
              {Mikey} "Vying with Ella's (below), for area's best bougie brunch spot, Datz provides excellent southern style breakfast and dinner dishes as well as excellent cocktails. Check out sister store <a href="https://bestdoughnuts.com/">Dough</a> next door if you are into doughnuts."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.eddieandsamspizza.com/">
                Eddie & Sam's N.Y. Pizza
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Eddie+%26+Sam's+Ny+Pizza,+East+Twiggs+Street,+Tampa,+FL/@27.8649453,-82.630312,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c4897cc4d1f9:0x6c1faf9747aa441c!2m2!1d-82.4591727!2d27.9488577!3e0">22.9 miles</a></p>
            <p>
              {Mikey} "Located in the middle of downtown Tampa, Eddie and Sam's is probably the best pizza in town."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.chinayuanrestaurant.com/">
                China Yuan
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/China+Yuan,+8502+N+Armenia+Ave+%231a,+Tampa,+FL+33604/@27.906773,-82.699546,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c1376c5795b3:0x28b90c65d625d642!2m2!1d-82.4846457!2d28.0279307">29.5 miles</a></p>
            <p>
              {Mikey} "Located in the small Tampa Chinatown at the corner of Waters and Armenia, China Yuan is the only reasonably authentic Chinese restaurant in Tampa. Cantonese cuisine, seafood and Dim Sum."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://www.tacosonmexicangrill.com/">
                Taco Son
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/TacoSon+Authentic+Mexican+Grill,+North+56th+Street,+Tampa,+FL/@27.8953829,-82.5998093,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c61f3e626e4f:0x11c5903b12c4f3d3!2m2!1d-82.3930642!2d28.0170385!3e0">30.1 miles</a></p>
            <p>
              {Mikey} "Closer to our neck of the woods, Taco Sun is our favorite cheap Mexican place around. Have not ever been to the original Taco Son in St. Petersburg (and it has a complicated relationship with other local chain Taco Bus), but the one on 56th street is great."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://dunderbaks.ieasysite.com/">
                Mr. Dunderbak's
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Mr.+Dunderbak's+Biergarten+and+Brewery,+Bruce+B+Downs+Boulevard,+Tampa,+FL/@27.931439,-82.6792748,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c78c99874f6f:0x970f151a797cd1e8!2m2!1d-82.411907!2d28.083089!3e0">34.8 miles</a></p>
            <p>
              {Mikey} "Super good German food and beer. Also at the bottom end of New Tampa, another suburban neighborhood."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Seminole_Heights">
                Seminole Heights
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Ella%E2%80%99s+Americana+Folk+Art+Cafe,+North+Nebraska+Avenue,+Tampa,+FL/@27.8761938,-82.6155539,11.8z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c4219d574321:0x554175bf5d7b952b!2m2!1d-82.4509196!2d27.9935829!3e0">25.8 miles</a></p>
            <p>
              {Mikey} "Serial killer free since 2017, Seminole Heights is the largest up-and-coming hipster gentrification neighborhood in Tampa. As a result, it has a great collection of food and drink options and will be popping up in this list repeatedly. Get your boozy sunday brunch on with BBQ and bloody marys with an actual pork rib in them at <a href="http://www.ellasfolkartcafe.com/">Ellas Cafe</a>. The rib bloody mary is a real selling point, but actually they have amazing cocktails, excellent food, and live music all the time, so they are a good choice for any time. Get hearty farm-to-table style meals at <a href="http://thetamparefinery.com/">The Refinery</a>. Get weird seasonal tapas at <a href="http://www.roosterandthetill.com/">The Rooster and the Till</a>. Get gastrobup burgers, truffle fries, cheese plates, and I'm told, excellent gluten free options at <a href="https://www.mermaidtaverntampa.com/">The Mermaid Tavern</a>. If you are into greasy spoon diners (and believe me, you should be) you can't beat <a href="https://threecoinsdiner.net/">Three Coins Diner</a>. For desert, check out local indie ice cream parlor <a href="http://revicecream.com/index.php">Revolution Ice Cream</a>."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Cuban_sandwich">
                Cuban Sandwiches
              </a>
            </Thing>
            <p>
              {Mikey} "One of Tampa's claims to fame is as the originator city of the Cuban sandwich. There's a lot of weirdness in Cuban Sandwich culture that we don't need to get into here, but you should really have one if you are going to be in town a few days. Perennial favorites on "Best of" lists are <a href="https://brocatossandwich.com/">Brocato's Sandwich Shop</a> and <a href="http://www.thecubansandwichshop.com/">The Cuban Sandwich Shop</a>. If you are up in our neck of the woods, <a href="https://www.rubenscubancafe.com/">Ruben's Cubans</a> is a good choice. If you are in Downtown St. Pete, <a href="http://eatatbodega.com/">Bodega on Central</a> is a good choice. If you are looking for my favorite Cuban sandwich place in town, check out the <a href="http://www.interbaymeatmarket.com/">Interbay Meat Market</a> down on MacDill. And if you are looking for the best cuban sandwiches around and willing to make a serious drive and eat outside at picnic tables, I haven't found any better than the <a href="https://www.thestrawberryhut.com/">Strawberry Hut</a> in Plant City."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
      </ol>
    </TampaSection>;
  }
}

export default TampaThings;
