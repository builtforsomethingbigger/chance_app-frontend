import React from 'react'
import '../styles/SearchCard.css';

const SearchCard = (props) => {
    return(
        <div id="searchCard">
           {props.charity_name}
        </div>
    )
}
export default SearchCard