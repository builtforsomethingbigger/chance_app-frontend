import React from 'react'
import DonationBar from './DonationBar'
import FavoritedCharityCard from './FavoritedCharityCard'
import '../styles/CharitiesPage.css';
import '../styles/Donations.css';

export default class CharitiesPage extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }
    
    state = {
        bgColors: [
            '#8AC926', '#0caca4', '#F49F0A', '#d36197', '#01FDF6',
            '#909CC2', '#E9DF00', '#E13700', '#337CA0', '#F58A07',
            '#04aa3b', '#03FCBA', '#FB5012', '#FFBE86', '#464655'
        ],
        display: true
    }

    goBack(){
        this.props.history.goBack();
    }
        
    allDonations = () => {
        return this.props.donations.filter(donation => donation.user_id === this.props.currentUser.id)
    }

    calcBarContainer = () => {
        const donations = this.allDonations()
        const amounts = donations.map(donation => donation.donation_amount)
        const maxDonation = Math.max.apply(null, amounts)
        return maxDonation
    }

    totalDonations = (id) => {
        const allDonations = this.props.donations.filter(donation => donation.user_id === id)
        const totalDonations = allDonations.map(donation => donation.donation_amount)
        const sum = totalDonations.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum
    }
    userFavorites = () => {
        const faves = this.props.favorites.filter(favorites => favorites.user_id === this.props.currentUser.id)
        return faves 
    }
    
    render(){
        return(
            <div id="charitiesPage">
                <div className="xClose xCharitiesPage" onClick={this.goBack}>x</div>
                <h1>MY CHARITIES</h1>

                {this.userFavorites().map(favorites => 
                    <FavoritedCharityCard key={favorites.id} {...favorites} 
                        charities={this.props.charities} 
                        currentUser={this.props.currentUser} 
                    />
                )}
                
                <div id="myDonationsContainer">
                    <div id="userDonationBar">
                        <h2 className="padBottom20">MY DONATIONS</h2>
                            {this.allDonations()
                                .sort((a,b) => new Date(b.donation_date) - new Date(a.donation_date))
                                .map((donation, index) => 
                                <DonationBar key={donation.id} {...donation} 
                                    charities={this.props.charities} 
                                    color={this.state.bgColors[index]} 
                                    graphWidth={this.calcBarContainer()}
                                />
                            )}
                    </div>
                    <div className="profileInfoRow_full pad20">
                        <p className="donation_amount">TOTAL DONATIONS</p>
                        <h2 className="up_12">${this.totalDonations(this.props.currentUser.id)}</h2>
                    </div>
                </div>

            </div>
        )
    }
}