import React from 'react';
import ArtistCard from './ArtistCard';
import 'bootstrap/dist/css/bootstrap.css';
import {CardColumns} from 'reactstrap';


const MusicianList = (props) => {
// console.log('These are the users: ', props.users)
console.log('These are the artist data: ', props.cards)





  let listOfCards = props.cards.map((card, i) => <ArtistCard key={'card_' + i} {...card}/>)

// console.log('list of cards', listOfCards)
    return(
        
    <CardColumns>
        {listOfCards}
    </CardColumns>
    )
}

export default MusicianList;