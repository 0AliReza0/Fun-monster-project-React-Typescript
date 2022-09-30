import React, {Component} from 'react';

import './card-list.styles.css'
import Card from "./card/Card.component";

import {Props,Monster} from "../../../../interfaces";

class CardList extends Component<Props> {

    render() {
        const {monsters} = this.props
        return (
            <div className='card-list'>
                {(monsters as Monster[]).map((monster) =>
                    <Card monster={monster} key={monster.id}/>
                )}
            </div>
        );
    }
}

export default CardList;