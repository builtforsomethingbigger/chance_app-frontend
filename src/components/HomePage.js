import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
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
        const allCharities = [...this.props.charities]
        const input = this.state.searchInput
        return allCharities.filter(charity => charity.charityName.toLowerCase().includes(input.toLowerCase())
          || charity.tagLine.toLowerCase().includes(input.toLowerCase())
          || charity.cause.causeName.toLowerCase().includes(input.toLowerCase())
    )}    

    render(){
        console.log(this.props.charities[0])

        return(
            <div id="homepage_wrapper">
                <SearchBar onChange={this.searchCharities} value={this.state.searchInput}/>
                <SearchResults charities={this.displaySearchedCharities()} />
            </div>
        )
    }
}