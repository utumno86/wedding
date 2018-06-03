import React, {Component} from 'react'
import styled from 'styled-components'

import TampaThings from "./TampaThings";
import StPeteThings from "./StPeteThings";
import FartherAfield from "./FartherAfield";

const ToDoPage = styled.div`
    background-color: #4928a0;
    padding-bottom: 2em;
`;

const Hero = styled.div`
    background-color: #4928a0;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 1em;
    opacity: 0.85;
    padding: 1em;
`;

const TabBar = styled.div`
    flex-direction: row;
    justify-content: center;
    display: flex;
`;

const Tab = styled.h3`
    margin: 1em;
    font-family: "Grand Hotel", cursive;
    font-size: 2em;
`;

class ThingsToDo extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'Farther'
        }
        // this.setSelectedTab = this.setSelectedTab.bind(this);
        // this.renderTabs = this.renderTabs.bind(this);
    }
    
    setSelectedTab() {
        // const tabChanged = this.state.selectedTab !== selectedTab;
        // if (tabChanged) {
        //   this.setState({ selectedTab });
        // }
        console.log('clicked tab')
    }

    renderTabs() {
        const { selectedTab } = this.state;
        switch (selectedTab) {
            case 'Tampa':
                return (
                    console.log('TampaThings')
                    // <TampaThings />
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
                        onClick={() => console.log(selectedTab === 'Tampa')}
                        selectedTab={this.state.selectedTab}
                    >
                        Tampa
                    </Tab>
                    <Tab
                        onClick={() => setSelectedTab('StPete')}
                    >
                        St. Pete
                    </Tab>
                    <Tab onClick={() => setSelectedTab('Farther')}>Farther Afield</Tab>
                </TabBar>
                {this.renderTabs()}
            </Box>
          </ToDoPage>;
    }
}

export default ThingsToDo
