import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Main from './Main'

const Home = styled.div`
  background-color: #4928A0;
`;


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home>
      <Main />
    </Home>,

    document.body.appendChild(document.createElement('div')),
  )
})
