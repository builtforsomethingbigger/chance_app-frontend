import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import CharityCard from './CharityCard';
import UserProfile from './UserProfile';
import '../styles/HomePage.css';

export default class HomePage extends React.Component{

    state = {
        searchInput: ''
    }

    searchCharities = e => {
        this.setState({
            [e.target.name]: e.target.value
          })
          this.displaySearchedCharities()      
    }

    displaySearchedCharities = e => {
        const input = this.state.searchInput
        return this.props.charities.filter(charity => charity.charity_name.toLowerCase().includes(input.toLowerCase())
          || (charity.tag_line && charity.tag_line.toLowerCase().includes(input.toLowerCase()))
          || charity.cause.toLowerCase().includes(input.toLowerCase())
    )}    

    render(){
        return(
            <div id="homepage_wrapper">
                <SearchBar onChange={this.searchCharities} value={this.state.searchInput}/>
                <SearchResults charities={this.displaySearchedCharities()} />
                <CharityCard />
                <UserProfile />
            </div>
        )
    }
}