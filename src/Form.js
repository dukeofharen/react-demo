import React, { Component } from 'react';
import axios from 'axios';

class Form extends React.Component {
	state = {
  	username: ''
  };

	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(resp => {
    	this.props.onSubmit(resp.data);
      this.setState({ username: '' });
    })
  };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} required />
        <button type="submit">Add card</button>
      </form>
    );
  }
};

export default Form