import React from 'react'
import SearchCard from './SearchCard'
import '../styles/SearchResults.css';


const SearchResults = (props) => {
    return(
        <div id="searchResults">
            {props.charities.map((charity, index) => <SearchCard key={index} {...charity}/>)}
        </div>
    )
}
export default SearchResults