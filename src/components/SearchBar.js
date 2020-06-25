import React from 'react'
import '../styles/SearchBar.css';

export default class SearchBar extends React.Component{

    render(){
        return(
            <div id="searchBar">
                <input className="searchField" onChange={this.props.onChange} value={this.props.value} name="searchInput" type="text" placeholder="search charity or keyword" />
                <span className="searchIcon" role="img" aria-label="menuIcon">🔎</span>
            </div>
        )
    }
}