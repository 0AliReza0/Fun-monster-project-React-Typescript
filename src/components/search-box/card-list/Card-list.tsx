import React, {Component} from 'react';

import './card-list.styles.css'
import Card from "./card/Card.component";

interface Props{
    monsters: {
        id: number
        name: string
        email: string
    }[]
}

interface Monster{
    id: number
    name:string
    email:string
}


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