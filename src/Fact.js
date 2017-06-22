import React, { Component } from 'react';

const Fact = (props) => {
    return (
        <div className="fact">
            <span>{props.fact.fact}</span>
        </div>
    );
}

export default Fact