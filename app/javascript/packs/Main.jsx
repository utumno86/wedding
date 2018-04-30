import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'

// import Navbar from './Navbar'
import SaveDate from './SaveDate'
import About from './About'
import PlacesToStay from './PlacesToStay'
import ThingsToDo from './ThingsToDo'
import Registry from './Registry'


const Navbar = styled.ul`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    justify-content: space-around;
    list-style-type: none;
    margin: 1em;
    padding: 0 1em 0 1em;
    text-decoration: none;
    width: 100%;
`;

const NavListItem = styled.li`
    text-decoration: none;
    color: #FFFFFFF
`;


class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <NavListItem>
                            <Link className='navListLink' to="/">Home</Link>
                        </NavListItem>
                        <NavListItem>
                            <Link className='navListLink' to="/about">About Us</Link>
                        </NavListItem>
                        <NavListItem>
                            <Link className='navListLink' to="/PlacesToStay">Places to Stay</Link>
                        </NavListItem>
                        <NavListItem>
                            <Link className='navListLink' to="/ThingsToDo">Things to Do</Link>
                        </NavListItem>
                        {/* <NavListItem>
                            <Link className='navListLink' to="/Registry">Registry</Link>
                        </NavListItem> */}
                    </Navbar>
                    <Route exact path="/" component={SaveDate} />
                    <Route path="/about" component={About} />
                    <Route path="/PlacesToStay" component={PlacesToStay} /> 
                    <Route path ="/ThingsToDo" component={ThingsToDo} />
                    {/* <Route exact path="/Registry" component={Registry} /> */}
                </div>
          </Router>
        );
    }
}

export default Main
