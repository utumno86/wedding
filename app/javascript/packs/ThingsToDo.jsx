import React, {Component} from 'react'
import styled from 'styled-components'

import TampaThings from "./TampaThings";
import StPeteThings from "./StPeteThings";
import FartherAfield from "./FartherAfield";

const ToDoPage = styled.div`
    background-color: #4928a0;
`;

const Hero = styled.div`
    align-items: center;
    background-color: #4928a0;
    background-image: url("/assets/Tampa2.jpg");
    background-position: top;
    background-repeat: no-repeat
    background-size: cover;
    display: flex;
    height: 40vh;
    justify-content: center;
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
    margin-top: 2em;
    padding: 0.1em;
`;

const HashTag = styled.span`
  font-family: "Lato", sans-serif;
`;

const Box = styled.div`
    align-items: center;
    background-color: #f6f6f6f6;
    border-radius: 5px;
    border: 3px solid #4928a0;
    color: #4928a0;
    display: flex;
    flex-direction: column;
    font-family: "Lato", sans-serif;
    justify-content: center;
`;

const TabBar = styled.div`
    flex-direction: row;
    justify-content: space-between;
    display: flex;
`;

const Tab = styled.h3`
    margin: 1em;
    font-size: 25px;
    font-family: "Grand Hotel", cursive;
    background-image: ${({ isSelected }) => (isSelected ? 'url("/assets/splash6.png")' : null)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

class ThingsToDo extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'Tampa'
        }
        this.setSelectedTab = this.setSelectedTab.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
    }
    
    setSelectedTab(selectedTab) {
        const tabChanged = this.state.selectedTab !== selectedTab;
        if (tabChanged) {
          this.setState({ selectedTab });
        }
      }

    renderTabs() {
        const { selectedTab } = this.state;
        switch (selectedTab) {
            case 'Tampa':
                return (
                    <TampaThings />
                );
            case 'StPete':
                return(
                    <StPeteThings />
                );
            case 'Farther':
                return(
                    <FartherAfield />
                )
            default:
                return( <TampaThings />)
        }
    }
    render() {
        const { selectedTab } = this.state;
        return <ToDoPage>
            <Hero>
              <Header>
                Things to do in the
                <HashTag> #OtherBayArea</HashTag>
              </Header>
            </Hero>
            <Box>
                <TabBar>
                    <Tab 
                        onClick={() => this.setSelectedTab('Tampa')}
                        isSelected={selectedTab === 'Tampa'}
                    >
                        Tampa
                    </Tab>
                    <Tab
                        onClick={() => this.setSelectedTab('StPete')}
                        isSelected={selectedTab === 'StPete'}
                    >
                        St. Pete
                    </Tab>
                    <Tab 
                        onClick={() => this.setSelectedTab('Farther')}
                        isSelected={selectedTab === 'Farther'}
                    >
                        Farther Afield
                    </Tab>
                </TabBar>
                {this.renderTabs()}
            </Box>
          </ToDoPage>;
    }
}

export default ThingsToDo
