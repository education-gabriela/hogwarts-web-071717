import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsContainer from "./PigsContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav/>
        <PigsContainer />
      </div>
    )
  }
}

export default App;
