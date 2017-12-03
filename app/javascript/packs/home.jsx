import React from 'react'
import ReactDOM from 'react-dom'
import SaveDate from './SaveDate'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div id = "main-page">
      <SaveDate />
    </div>,
    // <h6>date</h6>

    document.body.appendChild(document.createElement('div')),
  )
})
