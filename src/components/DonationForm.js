import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/DonationForm.css';

const donationsAPI = 'http://localhost:3000/donations'

export default class DonationForm extends React.Component{

    state = {
        user_id: this.props.currentUser.id,
        charity_id: this.props.charity.id,
        donation_amount: 0,
        donation_date: '',
        donation_note: '',
        favorite: null
    }

    submitDonation = e => {
        fetch(donationsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res=>res.json())
        .then(donation => this.props.newDonation(donation))
        return this.props.donationForm
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div id="donationForm" style={{display: this.props.display ? "inline-block" : "none"}}>
                <form>
                    <table width="90%" border="0" cellSpacing="0" cellPadding="10" align="center">
                        <tbody>
                            <tr>
                                <td width="40%" align="right">DONOR:&nbsp;&nbsp;</td>
                                <td width="60%" align="left">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</td>
                            </tr>
                            <tr>
                                <td align="right">RECIPIENT:&nbsp;&nbsp;</td>
                                <td align="left">{this.props.charity.charity_name}</td>
                            </tr>
                            <tr>
                                <td align="right">AMOUNT:&nbsp;&nbsp;</td>
                                <td align="left"><input className="donation-input" type="text" name="donation_amount" value={this.state.donation_amount} onChange={this.onChangeHandler}></input></td>
                            </tr>
                            <tr>
                                <td align="right">DATE:&nbsp;&nbsp;</td>
                                <td align="left"><input type="date" className="donation-input" name="donation_date" value={this.state.donation_date} onChange={this.onChangeHandler}></input></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top">CREDIT CARD INFO:&nbsp;&nbsp;</td>
                                <td align="left">
                                    {this.props.currentUser.cc_type}<br/>
                                    {this.props.currentUser.cc_number}<br/>
                                    {this.props.currentUser.cc_exp_date}&nbsp;/&nbsp;CVV:&nbsp;<input className="donation-input-cvv" type="text" name="donation_amount" value={this.state.cc_cvv} onChange={this.cvvHandler}></input>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" valign="top">NOTE:&nbsp;&nbsp;</td>
                                <td align="left"><input className="donation-input-note" type="text" name="donation_note" value={this.state.donation_note} onChange={this.onChangeHandler}></input></td>
                            </tr>
                    </tbody>
                    </table>
                    <Link to='/charities'><button type="submit" className="donation-submit" onClick={this.submitDonation}>SUBMIT</button></Link>
                    <p className="donation-goBack" onClick={this.props.donationForm}>CANCEL</p>
                </form>
            </div>
        )
    }
}