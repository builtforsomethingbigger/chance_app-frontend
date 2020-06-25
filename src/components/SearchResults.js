import React from 'react'
import SearchCard from './SearchCard'
import '../styles/SearchResults.css';


const SearchResults = (props) => {
   console.log(props.charities[0].id)
    return(
        <div id="searchResults">
            {props.charities.map(charity => <SearchCard key={charity.id} {...charity}/>)}
        </div>
    )
}
export default SearchResults