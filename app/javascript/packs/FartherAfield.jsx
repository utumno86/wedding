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


class FartherAfield extends Component {
  render() {
    const Liz = <Name>Liz</Name>;
    const Mikey = <Name>Michael</Name>;

    return <FartherSection>
        <ol>
          <ListItem>
            <Thing>
              <a href="https://disneyworld.disney.go.com/">Walt Disney World</a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Walt+Disney+World+Resort,+Walt+Disney+World+Resort,+Orlando,+FL/@28.1619499,-82.584349,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88dd7ee634caa5f7:0xa71e391fd01cf1a0!2m2!1d-81.563874!2d28.385233">90 miles</a></p>
            <p>
                {Mikey}: "I don't like to promote the idea that the only reason to come to Florida is Disney, but I'm realistic. I know one of the draws of our wedding is for people who want to go visit the rat."
            </p>
            <p>
                {Liz}: "Drink around the world in Epcot. Be prepared for it to be crowded, and make note that there is not Materhorn in the Magic Kingdom so don't try to navigate your way by that."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://www.universalorlando.com/web/en/us/index.html#subnav-a">
                Universal Studios
              </a>
            </Thing>
            <p>Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Universal+Studios+Florida,+Universal+Boulevard,+Orlando,+FL/@28.0525689,-82.5919536,9.05z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88e77ec39415df75:0xf985d8fc7734a5a1!2m2!1d-81.46646!2d28.4749751!5i1">100 miles</a></p>
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
            <p> Distance from Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Bok+Tower+Gardens,+Tower+Boulevard,+Lake+Wales,+FL/@27.8798522,-82.6831813,9z/data=!4m14!4m13!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88dd090ea5023a99:0x834c281787a1fea1!2m2!1d-81.5758554!2d27.9376486!5i1">88.4 miles</a></p>
            <p>
                {Mikey}: "There are a bunch of attractions in Florida that are basically some rich dude went a bit crazy and built an enormous monument in the middle of nowhere for no reason. Bok Tower is one of my favorites. It's an enormous Art Deco tower built on the highest hill in "peninsular" Florida. Awesome gardens designed by Frederick Law Olmsted. Also has a 60 bell carillon at the top, so stay for one of the short daily concerts. Side note: Liz and I also thought about getting married here but decided the location was more remote than we wanted to deal with. While you're there check out Spook Hill, which isn't like good or anything but is a pretty amazing slice of Americana.""
            </p>
            <p>
                {Liz}: "It's very pretty, and we were there on Cinco de Mayo so we got to hear <b>La Bamba</b> on the carillon.  I'm sure there will be some good holiday music in December."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="http://solomonscastle.com/">Solomon's Castle</a>
            </Thing>
            <p>Distance form Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Solomon's+Castle,+Solomon+Road,+Ona,+FL/@27.573786,-82.6086379,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88dcc6e7589867d3:0x48712eb8e021b864!2m2!1d-81.977258!2d27.373151">69 miles</a></p>
            <p>
                {Mikey}: "In the same weird roadside attraction vein as the above, here is a massive building full of weird sculptures made entirely out of garbage. The catch here is that the eccentric creator, Howard Solomon, actually lives there with his family. As a result you pretty much have to sign on to go take a tour of the house, but totally worth it.""
            </p>
            <p>
                {Liz}: "Haven't been here either yet, but I'm sure I will before the wedding.  Michael is always talking about it and admittedly, I confused it with the Coral Castle and Bok Tower until I went to those locations."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://en.wikipedia.org/wiki/Tarpon_Springs,_Florida">Tarpon Springs Sponge Docks</a>
            </Thing>
            <p>Distance form Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+Mirror+Lake+Drive+North,+Saint+Petersburg,+FL/Tarpon+Springs+Sponge+Docks,+735+Dodecanese+Blvd,+Tarpon+Springs,+FL+34689/@27.9644547,-82.7852082,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c28da072d6a52d:0x11e13ab73c69d233!2m2!1d-82.757611!2d28.155592">32.7 miles</a></p>
            <p>
                {Mikey}:  "One of Liz and I's favorite day trips. Tarpon Springs is a town that was settled by Greek sponge divers in the 1900s and now has the highest concentration of Greek Americans in the U.S. You want to go there, follow signs for the sponge docks, park and stroll down Dodecanese Blvd. checking out all of cool curio shops and truly outstanding Greek cuisine. Highlights are our favorite restaurant there, Hellas, the best in kitschy tourist attractions Spongeorama, and the sponge boat tours from the docks (there are dozens). While you are in town check out the cool Eastern Orthodox Church, St. Nicholas Cathedral.""
            </p>
            <p>
                {Liz}: "Tarpon Springs is really cool.  You'll find great food and a fun atmosphere in this hidden gem.  Also, all the greek salads in florida include a scoop of potato salad on top.  I never had that before I moved here, but it's tasty.""
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g34610-d830621-Reviews-Panchos_Villa_Mexican_Restaurant-San_Antonio_Florida.html">Pancho's Villa Mexican Restaurant</a>
            </Thing>
            <p>Distance form Shuffleboard Club:  <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/Pancho's+Villa+Mexican+Restaurant,+Pennsylvania+Avenue,+San+Antonio,+FL/@28.0559526,-82.6804488,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88c2ac423fdcb425:0x35250b80ff1371be!2m2!1d-82.2735444!2d28.3359988">54.4 miles</a></p>
            <p>
                {Mikey}:  "It's pretty far afield for a meal, but it's our favorite Mexican restaurant in the area. Go check out the other San Antonio."
            </p>
            <p>
                {Liz}: "Ya'll know I take my mexican food seriously, so if you are craving some, check Pancho's out.  You can checkout Saint Leo University which is gorgeous and visually reminds me of Scripps College in Claremont.  I worked a girls robotics camp there in 2016 and it's partially what inspired me to become a programmer.  They also have a Monestary and Abbey there if that is your sort of thing."
            </p>
          </ListItem>
          <ListItem>
            <Thing>
              <a href="https://www.shellfactory.com/">The Shell Factory and Nature Park</a>
            </Thing>
            <p>Distance form Shuffleboard Club: <a href="https://www.google.com/maps/dir/St+Petersburg+Shuffleboard+Clb,+559+Mirror+Lake+Dr+N,+St.+Petersburg,+FL+33701/The+Shell+Factory+and+Nature+Park,+N+Tamiami+Trail,+Fort+Myers,+FL/@27.2074289,-82.8336315,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88c2e1820b13a015:0xc143aab8b6bcbb90!2m2!1d-82.6412416!2d27.7755088!1m5!1m1!1s0x88db425817d625e1:0x1267be9c31765f6d!2m2!1d-81.8979719!2d26.7054901">115 miles</a></p>
            <p>
                {Mikey}:  "I didn't put this on here for a reason.  It's kitschy... I don't know, Liz can write this one."
            </p>
            <p>
                {Liz}: "It is an old school tourist trap.  A large store where you can buy shells and christmas decorations year round with a 'nature park,' mini golf, bumber boats and a zipline to make it more 'fun'.  If you pay to go into the nature park you can feed alligators and birds, but you can probably do that at <a href="https://www.gatorworldparks.com/">Gator World</a> in Orlando or at various rest stops and gas stations along the interstate.  However, if you are heading south towards Miami, Fort Myers or my parents house, you should check it out.  Especially the busted animatronics in the 'Pirate Museum.'  I think Michael's 'favorite' part was paying 50 cents to open an outhouse to see an animatronic sitting on the john and telling us about the history of Florida Crackers.  Oh yeah... it's a must see!"
            </p>
          </ListItem>
        </ol>
      </FartherSection>;
  }
}

export default FartherAfield;


