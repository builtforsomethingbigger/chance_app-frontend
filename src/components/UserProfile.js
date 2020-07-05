import React from 'react'
// import DonationBar from './DonationBar'
import '../styles/UserProfile.css';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }
     
    state = {
        // bgColors: [
        //     '#8AC926', 
        //     '#0caca4', 
        //     '#F49F0A', 
        //     '#d36197', 
        //     '#01FDF6',
        //     '#909CC2', 
        //     '#E9DF00', 
        //     '#E13700', 
        //     '#b161d3', 
        //     '#337CA0', 
        //     '#F58A07',
        //     '#04aa3b', 
        //     '#03FCBA'
        // ],
        display: true
    }
        
    goBack(){
        this.props.history.goBack();
    }
    
    allDonations = () => {
        return this.props.donations.filter(donation => donation.user_id === this.props.currentUser.id)
    }

    
    totalDonations = (id) => {
        const allDonations = this.props.donations.filter(donation => donation.user_id === id)
        const totalDonations = allDonations.map(donation => donation.donation_amount)
        const sum = totalDonations.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum
    }
    
    // calcBarContainer = () => {
    //     const donations = this.allDonations()
    //     const amounts = donations.map(donation => donation.donation_amount)
    //     const maxDonation = Math.max.apply(null, amounts)
    //     return maxDonation
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
                {/* <div id="userDonationBar">
                        {this.allDonations().sort((a,b) => new Date(b.donation_date) - new Date(a.donation_date)).map((donation, index) => 
                            <DonationBar key={donation.id} {...donation} charities={this.props.charities} color={this.state.bgColors[index]} graphWidth={this.calcBarContainer()}/>
                        )}
                </div>
                <div className="profileInfoRow_full pad20">
                    <p className="donation_amount">TOTAL DONATIONS</p>
                    <h2 className="up_12">${this.totalDonations(this.props.currentUser.id)}</h2>
                </div> */}

            </div>
        )
    }
}