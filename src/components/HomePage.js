import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import CharityCard from './CharityCard';
import UserProfile from './UserProfile';
import '../styles/HomePage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class HomePage extends React.Component{

    state = {
        searchInput: '',
        selectedCharity: {},
        charityCard: false,
        userProfile: false
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
            <div id="homepage_wrapper">
                <SearchBar onChange={this.searchCharities} value={this.state.searchInput}/>
                <SearchResults display={this.state.searchResults} charities={this.displaySearchedCharities()} onClick={this.showCharityCard} />
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={3000}>            
                    <CharityCard display={this.state.charityCard} charity={this.state.selectedCharity} onClick={this.hideCharityCard}/>
                <UserProfile display={this.state.userProfile} />
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}