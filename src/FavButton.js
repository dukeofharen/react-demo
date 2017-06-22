import React, { Component } from 'react';
import axios from 'axios';

class FavButton extends React.Component {
	handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/facts/favourite/${this.props.fact.id}`)
        .then(resp => {
            console.log(resp);
            this.props.onSubmit(this.props.fact);
        })
    };

	render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <button type="submit">Fav this fact</button>
        </form>
        );
    }
};

export default FavButton