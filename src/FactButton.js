import React, { Component } from 'react';
import axios from 'axios';

class FactButton extends React.Component {
	handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://localhost:5000/facts/random')
        .then(resp => {
            this.props.onSubmit(resp.data);
        })
    };

	render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <button type="submit">Get random fact</button>
        </form>
        );
    }
};

export default FactButton