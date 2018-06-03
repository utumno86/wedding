import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Main from './Main'

// background-color: #4928A0
// background-image: url("/assets/texture1.jpg");
// background-position: center;
// background-repeat: repeat;
// background-size: cover;
const Home = styled.div`
`;
// background-color: #f6f6f6;
// display: flex

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home>
      <Main />
    </Home>,

    document.body.appendChild(document.createElement('div')),
  )
})
