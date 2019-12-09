import React from 'react'
import Card from '../card/card.components'
import './card-list.style.css'
const CardList = (props) => {


    return (
        <div className="card-list">
            {props.persons.map(person =>
                <Card person={person} key={person.id} />
            )}
        </div>
    )
}
export default CardList