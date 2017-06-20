import React, { Component } from 'react';
import Card from './Card';

const CardList = (props) => {
	// Spread operator "..."
	return (
  	<div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};

export default CardList