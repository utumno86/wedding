import React, {Component} from 'react'
import styled from 'styled-components'

import TampaThings from "./TampaThings";
import StPeteThings from "./StPeteThings";

const ToDoPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh
    width: 100vw;
`;
const SkylineBox = styled.div`
    align-items: center;
    background-image: url("/assets/Tampa2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 5em;
    width: 100%;
`;

const Header = styled.h1`
    background-image: url("/assets/splash6.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #4928a0;
    font-family: "Grand Hotel", cursive;
    font-size: 3em;
    text-align: center;
    width: 80%;
    margin-top: 2em;
`;

const HashTag = styled.span`
  font-family: "Lato", sans-serif;
`;

const LowerBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;


class ThingsToDo extends Component {
    render() {
        return <ToDoPage>
            <SkylineBox>
              <Header>
                Things to do in the
                <HashTag> #OtherBayArea</HashTag>
              </Header>
            </SkylineBox>
            <LowerBox>
              <TampaThings />
              <StPeteThings />
            </LowerBox>
          </ToDoPage>;
    }
}

export default ThingsToDo