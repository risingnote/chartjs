import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import PercentHistogram from './components/PercentHistogram'

import styled from 'styled-components'

const DisplayBox = styled.div`
  margin: 1em;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
`

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 12.5, 0, 0, 0, 12.5, 12.5, 0, 37.5]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DisplayBox>
          <PercentHistogram data={data} />
        </DisplayBox>
      </div>
    )
  }
}

export default App
