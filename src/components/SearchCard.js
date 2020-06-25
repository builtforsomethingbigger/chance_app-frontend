import React from 'react'
import '../styles/SearchCard.css';

const SearchCard = (props) => {
    // console.log(props)
    return(
        <div id="charityCard">
           {props.charityName}
        </div>
    )
}
export default SearchCard