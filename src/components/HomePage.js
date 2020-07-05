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
        loginPage: true,
        charityCard: false,
        donationForm: false
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

    showDonationForm = e => {
        if(this.state.donationForm){
            this.setState({
                donationForm: false
            })
        }else{
            this.setState({
                donationForm: true
            })
        }
    }
    
    render(){
        return(
            <div id="homeSearchPage">
                <SearchBar onChange={this.searchCharities} value={this.state.searchInput}/>
                <SearchResults display={this.state.searchResults} charities={this.displaySearchedCharities()} onClick={this.showCharityCard} />
                <CharityCard 
                    display={this.state.charityCard} 
                    currentUser={this.props.currentUser} 
                    allUsers={this.props.allUsers}
                    charity={this.state.selectedCharity} 
                    charities={this.props.charities}
                    favorites={this.props.favorites} 
                    onClick={this.hideCharityCard} 
                    donationForm={this.state.donationForm} 
                    donate={this.showDonationForm} 
                    newDonation={this.props.newDonation} 
                    favortied={this.state.hearted} 
                    favClick={this.props.favClick}
                />
            </div>
        )
    }
}