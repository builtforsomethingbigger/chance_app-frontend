import React from 'react'
import DonationBar from './DonationBar'
import '../styles/UserProfile.css';
import '../styles/Donations.css';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }
     
    state = {
        bgColors: ['#8AC926', '#0caca4', '#d36197','#04aa3b', '#b161d3', '#6A4C93', 'E13700', '#3EC300','#337CA0', '#F58A07', '#909CC2'],
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

    // closeUserProfile = () => {
    //     this.setState({
    //         display: false
    //     })
    // }


    render(){

        return(
            <div id="userProfile">
                <div className="xClose xUserProfile" onClick={this.goBack}>x</div>
                <div className="padTop20"><h1 className="usernameHeadline">{this.props.currentUser.username?.toUpperCase()}</h1></div>
                <div className="profileInfoRow_half">
                    <h3>FULL NAME</h3>
                    <p>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                </div>
                <div className="profileInfoRow_half">
                    <h3>DONOR STATUS</h3>
                    <p>{this.totalDonations(this.props.currentUser.id) ? "Active" : "Enthusiast"}</p>
                </div>
                <div className="profileInfoRow_half">
                    <h3>EMAIL ADDRESS</h3>
                    <p>{this.props.currentUser.email_address}</p>
                </div>
                <div className="profileInfoRow_half">
                    <h3>PHONE NUMBER</h3>
                    <p>{this.props.currentUser.phone_number}</p>
                </div>
                <div className="profileInfoRow_full">
                    <h3>STREET ADDRESS</h3>
                    <p>{this.props.currentUser.street_address}</p>
                    <p>{this.props.currentUser.street_address_2}</p>
                    <p>{this.props.currentUser.city}, {this.props.currentUser.zip}</p>
                </div>
                <div id="userDonationBar">
                        {this.allDonations().sort((a,b) => new Date(b.donation_date) - new Date(a.donation_date)).map((donation, index) => 
                            <DonationBar key={donation.id} {...donation} charities={this.props.charities} color={this.state.bgColors[index]} graphWidth={this.calcBarContainer()}/>
                        )}
                </div>
                <div className="profileInfoRow_full pad20">
                    <p className="donation_amount">TOTAL DONATIONS</p>
                    <h2 className="up_20">${this.totalDonations(this.props.currentUser.id)}</h2>
                </div>

            </div>
        )
    }
}