import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import CardList from './CardList';

class App extends React.Component {
	state = {
  	cards: []
  };
  
  addNewCard = (card) => {
  	this.setState(prevState => ({
     cards: prevState.cards.concat(card)
    }))
  };

	render() {
  	return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Form onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </div>
      </div>
    )
  }
};

export default App;
