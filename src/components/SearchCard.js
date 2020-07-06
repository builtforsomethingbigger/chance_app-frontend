import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/SearchCard.css';
// import useSound from 'use-sound'
// import clickSound from '../sounds/click_5.mp3'

const SearchCard = (props) => {

    // const [play] = useSound(
    //     clickSound,
    //     { volume: 0.5 }
    //   )

      return(
        <Link to='/charities/:id'>
            <div id="searchCard" onClick={() => {props.charityCard(props.id)} }>
            {props.charity_name}
            </div>
        </Link>
    )
}
export default SearchCard
