import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/SearchCard.css';

const SearchCard = (props) => {
    return(
        <Link to='/charities/:id'>
            <div id="searchCard" onClick={() => props.charityCard(props.id)}>
            {props.charity_name}
            </div>
        </Link>
    )
}
export default SearchCard