import React, { Component } from 'react'
import styled from 'styled-components'

const TampaSection = styled.div`
  margin: 1em;
`;

// const Tagline = styled.h1`
//   font-family: "Grand Hotel", cursive;
//   font-size: 2.5em;
//   text-align: center;
// `;

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

// const HeaderImage = styled.img`
//     width: 10%;
//     height: 10%;
//     padding: 0.5em;
// `;

// const HeaderImage2 = HeaderImage.extend`
//     transform: scaleX(-1);
// `;

class TampaThings extends Component {
  render() {
    const Liz = <Name>Liz: </Name>;
    const Mikey = <Name>Michael: </Name>;

    return <TampaSection>

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
      <h3>Breweries</h3>
      <ol>
        <ListItem>
          <div>
            <Thing>
              <a href="https://cigarcitybrewing.com/">
                Cigar City Brewing
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Cigar+City+Brewing+Company,+West+Spruce+Street,+Tampa,+FL/@27.8666011,-82.6578727,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c23905f3b78b:0x66bc6a7b69581ab!2m2!1d-82.5091911!2d27.959001!3e0">20.1 miles</a></p>
            <p>
              {Mikey} "Founded by the son of Tampa strip club magnate <a href="https://en.wikipedia.org/wiki/Joe_Redner">Joe Redner</a>, Cigar City is the biggest and probably best of the Bay Area breweries that popped up like mushrooms as craft breweries became a thing. They have a rotating cast of beer on tap, but my favorite of their standbys is the Brown Maduro. The taproom usually has a food truck. Even though Ybor is often referred to as "Cigar City" Cigar City Brewery is not located in Ybor; it's on Spruce Street by the airport. To make matters more confusing, there is a Cigar City Meadery that <i>is</i> in Ybor. <i>Shrug</i>."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://hiddenspringsaleworks.com/">
                Hidden Springs Ale Works
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Hidden+Springs+Ale+Works,+North+Franklin+Street,+Tampa,+FL/@27.8871105,-82.5087758,12z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c4641109923f:0xdc1e226e7ef66d18!2m2!1d-82.459935!2d27.959295!3e0">22.7 miles</a></p>
            <p>
              {Mikey} "Downtownish, cozy taproom, the Deja Moo is probably my second favorite local beer."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://coppertailbrewing.com/">
                Coppertail Brewing Co.
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Coppertail+Brewing+Co.,+East+2nd+Avenue,+Tampa,+FL/@27.8691524,-82.6183585,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c5ab649a7bcb:0x71f69fc7b8ab4fa6!2m2!1d-82.4301625!2d27.9562885!3e0">24.6 miles</a></p>
            <p>
              {Mikey} "Also Downtownish, but a bit bigger than some of the others mentioned here. Haven for lovers of dark beer. Fan of the Coppertail Nightswim."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://angrychairbrewing.com/">
                Angry Chair Brewing
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Angry+Chair+Brewing,+North+Florida+Avenue,+Tampa,+FL/@27.8892789,-82.629499,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c6a4011cbc47:0x9a16cf5b02bc8fc7!2m2!1d-82.4592887!2d28.0051338!3e0">26.7 miles</a></p>
            <p>
              {Mikey} "Also in Seminole Heights, Angry Chair is friendly, has great beer, but is a tad small and has some parking issues. I'm a fan of their Two Pump Chump."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
      </ol>
      <h3>Bars</h3>
      <ol>
        <ListItem>
          <div>
            <Thing>
              <a href="http://soho.macdintonsirishpub.com/">
                MacDinton's
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/MacDinton's+Soho,+South+Howard+Avenue,+Tampa,+FL/@27.863032,-82.6422583,11.98z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c364e40e244d:0x1cccbfc7766d53e5!2m2!1d-82.483172!2d27.940559!3e0">22.2 miles</a></p>
            <p>
              {Mikey} "MacDinton's is the heart of the South Tampa bar district called Soho (and affectionately known by locals as Broho). If you like hanging out with frat boys and bachelor parties on their way to Tampa's strip clubs, Broho is your place. Also, MacDinton's is the sponsor of Liz's old Rugby team so there's a fair chance of running into Rugby girls too."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.fourgreenfields.com/">
                Four Green Fields
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Four+Green+Fields,+West+Platt+Street,+Tampa,+FL/@27.8647935,-82.6326693,12z/data=!4m15!4m14!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c48e32feec6b:0xbd7b6e401f32851f!2m2!1d-82.4616115!2d27.9418871!3e0!5i1">21.8 miles</a></p>
            <p>
              {Mikey} "My favorite bar in Tampa. Advertises as being the only authentic thatched roof pub in the United States. Espouses some pretty sketchy ideas about Irish independence. Good wings. Authentic grizzled old Irish dude singing sounds on Friday and Saturday night. All this is in reference to the original bar on Platt St. I've never been to the new one in Curtis Hixon Park."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://independentbartampa.com/">
                The Independent
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Independent+Bar+and+Cafe,+5016+N+Florida+Ave,+Tampa,+FL+33603/@27.8826933,-82.629499,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c41be7cdfe3d:0x6bff3b67539d46a3!2m2!1d-82.4596096!2d27.9919626!3e0">25.6 miles</a></p>
            <p>
              {Mikey} "A lot of the Seminole Heights restaurants double as bars, but the best loved bar in the neighborhood is the Indie. Great beer, great atmosphere, decent food."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://lowryparcade.com/">
                Lowry Parcade
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Lowry+Parcade,+West+Waters+Avenue,+Tampa,+FL/@27.89949,-82.699546,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c6ca4bd7f777:0x9262d2ac6f017c44!2m2!1d-82.4712711!2d28.0256623">28.6 miles</a></p>
            <p>
              {Mikey} "Also in Seminole Heights, is this sweet arcade bar. Drink beer and play pinball!"
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.gasparspatio.com/">
                Gaspar's Patio
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Gaspar's+Patio+Bar+%26+Grille,+North+56th+Street,+Temple+Terrace,+FL/@27.9050099,-82.6770331,10.94z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c626804d9e0b:0x53527567b25c3763!2m2!1d-82.3938292!2d28.0276113!3e0">31.4 miles</a></p>
            <p>
              {Mikey} "Our friendly neighborhood bar. When I was younger and singler I would close out the bar every Friday night. Live Music and Karaoke (in different parts of the bar) on Friday and Saturday night. Check out the liquor store next door, it's our favorite around."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="http://www.gasparspatio.com/">
                Gaspar's Patio
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Gaspar's+Patio+Bar+%26+Grille,+North+56th+Street,+Temple+Terrace,+FL/@27.9050099,-82.6770331,10.94z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c626804d9e0b:0x53527567b25c3763!2m2!1d-82.3938292!2d28.0276113!3e0">31.4 miles</a></p>
            <p>
              {Mikey} "Our friendly neighborhood bar. When I was younger and singler I would close out the bar every Friday night. Live Music and Karaoke (in different parts of the bar) on Friday and Saturday night. Check out the liquor store next door, it's our favorite around."
            </p>
            <p>
              {Liz} ""
            </p>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Thing>
              <a href="https://yborcityonline.com/">
                Ybor City
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Columbia+Restaurant,+East+7th+Avenue,+Tampa,+FL/@27.86576,-82.6175384,11.95z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2c4524dbbc7cf:0x3e9c07c7be9bec05!2m2!1d-82.4350771!2d27.959959!3e0">24.6 miles</a></p>
            <p>
              {Mikey} "The main bar district in Tampa is in historic Ybor City, centered around 7th avenue (affectionately called La Setima) between 22nd St. and about 13th St. It has bars for all tastes and ages, from cigar bars to karaoke to fetish nightclubs to LGBT bars to hipster gastropubs. A few recommendations: For the smoker, <a href="http://kingcoronacigars.com/">King Corona</a> cigar bar has a great location and excellent Sangria. <a href="https://yborcityonline.com/lions-den-cigar-lounge/">The Lion's Den</a> has comfy couches and amazing cocktails. (Also, my babrber is there, tucked into a small room in the corner of the bar.) For a kind of chill divy bar, I like <a href="http://www.tampabay.com/things-to-do/food/spirits/the-dirty-shame-a-classic-dive-with-ybor-city-attitude/2140125">The Dirty Shame</a> on the far edge of the Ybor strip. <a href="http://www.doubledeckertampa.com/">The Double Decker</a> for karaoke. <a href="http://samuraiblue.com/">Samurai Blue</a> for sushi.
<a href="https://www.tbbc.beer/home"> Tampa Bay Brewing Company</a> for craft beer and burgers. <a href="https://www.thebricksybor.com/">The Bricks</a> for fancy cocktails and hispter gastropub fare. My favorite place in Ybor, (and where I used to take first dates), is <a href="http://www.cigarcitycider.com/">Cigar City Cider and Mead</a>. A bit off the beaten track, but pretty much the place in Tampa if you are into Cider or Mead."
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
