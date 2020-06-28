import React from 'react'
import SearchCard from './SearchCard'
import '../styles/SearchResults.css';


const SearchResults = (props) => {
    return(
        <div id="searchResults">
            {props.charities.map((charity, index) => <SearchCard key={index} {...charity} onClick={props.onClick}/>)}
        </div>
    )
}
export default SearchResults