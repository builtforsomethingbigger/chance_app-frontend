import React from 'react'
import DonationBar from './DonationBar'
import '../styles/UserProfile.css';

export default class UserProfile extends React.Component{

    state = {
        userDonations: []
    }

    componentDidMount(){
        this.allDonations()
    }

    allDonations = () => {
        const allDonations = this.props.donations.filter(donation => donation.user_id === this.props.currentUser.id)
        this.setState({
            userDonations: allDonations
        })
        console.log(this.props.currentUser.id)
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
            <div id="userProfile" style={{display: this.props.display ? "inline-block" : "none"}}>
                <div><h1>{this.props.currentUser.username}</h1></div>
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
                <div id="userDonationGraph">
                    {this.state.userDonations.map(donation => 
                        <DonationBar key={donation.id} {...donation}/>
                    )}
                </div>
            </div>
        )
    }
}