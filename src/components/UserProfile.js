import React from 'react'
import DonationBar from './DonationBar'
import '../styles/UserProfile.css';
import '../styles/Donations.css';

export default class UserProfile extends React.Component{

    state = {
        bgColors: ['red', 'blue', 'green', 'lightgreen', 'yellow', 'yellowgreen', 'turquoise'],
        display: true
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

    closeUserProfile = () => {
        this.setState({
            display: false
        })
    }


    render(){
        // const username = this.props.currentUser.username
        return(
            <div id="userProfile" style={{display: this.props.userProfile ? "inline-block" : "none"}}>
                <div className="xClose xUserProfile" onClick={this.props.onClick}>x</div>
                <div><h1>{this.props.currentUser.username?.toUpperCase()}</h1></div>
                <div className="profileInfoRow">
                    <h3>FIRST NAME</h3>
                    <p>{this.props.currentUser.first_name}</p>
                </div>
                <div className="profileInfoRow">
                    <h3>LAST NAME</h3>
                    <p>{this.props.currentUser.last_name}</p>
                </div>
                <div className="profileInfoRow">
                    <h3>EMAIL ADDRESS</h3>
                    <p>{this.props.currentUser.email_address}</p>
                </div>
                <div className="profileInfoRow">
                    <h3>TOTAL DONATIONS</h3>
                    <p>${this.totalDonations(this.props.currentUser.id)}</p>
                </div>
                <div id="userDonationBar">
                        {this.allDonations().map((donation, index) => 
                            <DonationBar key={donation.id} {...donation} charities={this.props.charities} color={this.state.bgColors[index]} graphWidth={this.calcBarContainer()}/>
                        )}
                </div>
            </div>
        )
    }
}