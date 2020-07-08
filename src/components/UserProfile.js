import React from 'react'
import CloseBtn from './CloseBtn'
import '../styles/UserProfile.css';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }
     
    state = {
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
    
    render(){

        return(
            <div id="userProfile">
                <CloseBtn clickHandler={() => {this.goBack()}}/>
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
            </div>
        )
    }
}