import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FactButton from './FactButton';
import Fact from './Fact';
import FavButton from './FavButton';
import Favourites from './Favourites';

class App extends React.Component {
  state = {
    fact: { id: 0, fact: '' },
    favourites: []
  };

  setFact = (fact) => {
    this.setState(prevState => ({
     fact: fact
    }));
  };

  addFav = (fact) => {
    this.setState(prevState => ({
     favourites: prevState.favourites.concat(fact)
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FactButton onSubmit={this.setFact} />
        <Fact fact={this.state.fact} />
        <FavButton fact={this.state.fact} onSubmit={this.addFav} />
        <Favourites favourites={this.state.favourites} />
      </div>
    );
  };
};

export default App;
