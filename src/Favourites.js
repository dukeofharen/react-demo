import React, { Component } from 'react';
import Fact from './Fact';

const Favourites = (props) => {
    return (
        <div className="favourites">
            {props.favourites.map(fact => <Fact key={fact.id} fact={fact} />)}
        </div>
    );
}

export default Favourites