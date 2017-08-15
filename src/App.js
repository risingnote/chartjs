import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import styled from 'styled-components'

const DisplayBox = styled.div`
  margin: 1em;
  padding: 2em;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DisplayBox>Graph component goes here</DisplayBox>
      </div>
    )
  }
}

export default App
