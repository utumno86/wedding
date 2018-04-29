import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import SaveDate from './SaveDate'

const MainPage = styled.div`
  background-color: #4928A0
  height: 100vh
  width: 100vw
  display: flex
`;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainPage>
      <SaveDate />
    </MainPage>,

    document.body.appendChild(document.createElement('div')),
  )
})
