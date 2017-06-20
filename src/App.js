import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welkom bij de Quintor React.js (mini)-masterclass. Je kunt dit template gebruiken om van start te gaan met React.js.
        </p>
      </div>
    );
  }
}

export default App;
