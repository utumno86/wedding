import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'

import SaveDate from './SaveDate'
import About from './About'
import PlacesToStay from './PlacesToStay'
import ThingsToDo from './ThingsToDo'
import Registry from './Registry'

const Navbar = styled.ul`
    align-items: center;
    background-color: #4928a0;
    color: #f6f6f6f6;
    display: flex;
    flex-direction: row;
    font-family: 'Grand Hotel', cursive;
    justify-content: space-between;
    list-style-type: none;
    text-decoration: none;
    padding: 5px;
`

const NavListItem = styled.li`
    text-decoration: none;
    color: #FFFFFFF
    font-size: 20px;
`

const Path = process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'mikeandliz.date'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar>
            <NavListItem>
              <Link className='navListLink' to="/">Home</Link>
            </NavListItem>
            <NavListItem>
              <Link className='navListLink' to="/PlacesToStay">Places to Stay</Link>
            </NavListItem>
            <NavListItem>
              <Link className='navListLink' to="/ThingsToDo">Things to Do</Link>
            </NavListItem>
            <NavListItem>
              <a href={'http://' + Path + '/guest'} className='navListLink'>RSVP</a>
            </NavListItem>
            <NavListItem>
              <Link className='navListLink' to="/Registry">Registry</Link>
            </NavListItem>
          </Navbar>
          <Route exact path="/" component={SaveDate} />
          <Route path="/about" component={About} />
          <Route path="/PlacesToStay" component={PlacesToStay} />
          <Route path ="/ThingsToDo" component={ThingsToDo} />
          <Route exact path="/Registry" component={Registry} />
        </div>
      </Router>
    )
  }
}

export default Main
