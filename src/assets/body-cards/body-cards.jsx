import React from 'react';
import Cards from './cards';
import data from '../data/data';
export default function BodyCards() {
    const cards = data.map(item => (
        <div id='body-cards-root' key={item.id}>
            <Cards
                item={item}
            />
        </div>
    ));
    return (
        <div className='card-lists'>
            {cards}
        </div>
    );
}
