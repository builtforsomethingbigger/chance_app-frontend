import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import CharityCard from './CharityCard';
import '../styles/HomePage.css';
// import LoginPage from './LoginPage';

export default class HomePage extends React.Component{

    state = {
        searchInput: '',
        selectedCharity: {},
        charityCard: false,
        loginPage: true
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
          || charity.mission.toLowerCase().includes(input.toLowerCase())
    )}
    
    showCharityCard = (id) => {
        const findCharity = this.props.charities.find(charity => charity.id === id)
        if (this.state.charityCard === false){
            this.setState({
                selectedCharity: findCharity,
                charityCard: true
            })
        }
    }

    hideCharityCard = e => {
        this.setState({
            charityCard: false
        })
    }

    
    render(){
        return(
            <div id="homeSearchPage">
                <SearchBar onChange={this.searchCharities} value={this.state.searchInput}/>
                <SearchResults display={this.state.searchResults} charities={this.displaySearchedCharities()} onClick={this.showCharityCard} />
                <CharityCard display={this.state.charityCard} charity={this.state.selectedCharity} onClick={this.hideCharityCard}/>
            </div>
        )
    }
}