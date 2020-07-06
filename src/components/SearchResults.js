import React from 'react'
import SearchCard from './SearchCard'
import '../styles/SearchResults.css';


const SearchResults = (props) => {
    return(
        <div id="searchResults">
            {props.charities.sort((a,b) => b.current_rating - a.current_rating)
            .map((charity, index) => <SearchCard key={index} {...charity} 
            charityCard={props.charityCard}/>)
            .slice(0,100)
            }
        </div>
    )
}
export default SearchResults