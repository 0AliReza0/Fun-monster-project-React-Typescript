import React, {Component} from 'react';

import './card.styles.css'

import {CardProps} from '../../../../../interfaces'

class Card extends Component<CardProps> {
    render() {
        const {id, name, email} = this.props.monster
        return (
            <div className='card-container'>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;