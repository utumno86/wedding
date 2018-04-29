import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import SaveDate from './SaveDate'
// import Navbar from './Navbar'

const MainPage = styled.div`
  background-color: #4928A0
  height: 100vh
  width: 100vw
  display: flex
`;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainPage>
      {/* <NavBar /> */}
      <SaveDate />
    </MainPage>,

    document.body.appendChild(document.createElement('div')),
  )
})
