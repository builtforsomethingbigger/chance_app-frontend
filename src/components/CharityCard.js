import React from 'react'
import CharityEvents from './CharityEvents'
import EventForm from './EventForm'
import DonationForm from './DonationForm'
import HeartEmpty from '../images/heart_empty.gif'
import HeartFull from '../images/heart_full.gif'
import '../styles/CharityCard.css';
import '../styles/CharityEvents.css';

const eventsAPI = 'http://localhost:3000/events'
const favoritesAPI = 'http://localhost:3000/favorites'

export default class CharityCard extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    state = {
        events: [],
        favCharity: {},
        moreInfo: false,
        eventForm: false,
        donationForm: false
    }

    componentDidMount(){
        this.displayEvents()
    }

    goBack(){
        const anchor = this.props.history.location.hash 
        anchor ? this.props.history.go(-2) : this.props.history.goBack();
    }
    

    displayEvents = () => {
        fetch(eventsAPI)
        .then(res => res.json())
        .then(events => this.setState({ events }))
    }

    showMoreInfo = e => {
        if (this.state.moreInfo === false){
            this.setState({
                moreInfo: true
            })
        }else{
            this.setState({
                moreInfo: false
        })
        }
    }
    hideMoreInfo = e => {
        this.setState({
            moreInfo: false
        })
    }

    /* EVENT FUNCTIONS */
    postEvent = (event) => {
        this.setState({
            events: [...this.state.events, event]
        })
    }

    /* DONATION FUNCTIONS*/
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



    userFavorites = () => {
        const faves = this.props.favorites.filter(favorites => favorites.user_id === this.props.currentUser.id)
        return faves 
    }
    hearted = () => {
        const x = this.userFavorites().find(favorite => 
            favorite.charity_id === this.props.charity.id)
        if(x){
            return true
        }else{
            return false
        }
    }
    findFavorite = () => {
        const faves = this.props.favorites.filter(favorites => favorites.user_id === this.props.currentUser.id)
        const x = faves.find(favorite => 
            favorite.charity_id === this.props.charity.id)
        return x.id
    }

    favoriteCharity = e => {
        if(this.hearted()){
            const id = this.findFavorite()
            fetch(`${favoritesAPI}/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json'
                }
            })
            this.props.favClick(id, false)
        }else{
            fetch(favoritesAPI,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.currentUser.id,
                    charity_id: this.props.charity.id
                })
            })
            .then(res => res.json())
            .then(favorite => this.props.favClick(favorite, true))
        }
    }

    charityContact = () => {
        const user = this.props.allUsers.find(user => user.id === this.props.charity.user_id)
        return user
    }

    charityEvents = () => {
        const events = this.state.events.filter(events => events.charity_id === this.props.charity.id)
        return events
    }

    showEventForm = e => {
        if(this.state.eventForm){
            this.setState({
                eventForm: false
            })
        }else{
            this.setState({
                eventForm: true
            })
        }
    }
    
    render(){
        if(!this.props.charity) return ''
        const mission = this.props.charity.mission.replace(/<br>/g, ' ')
        return(
            <div id="charityCard" className="chairtyInfoFont">
                <div className="xClose xCharityCard" onClick={() => { this.goBack(); this.props.onClick();}}>x</div>
                <div><img className={`followHeart ${this.hearted() ? `followHearbeat` : ''}`} src={this.hearted() ? HeartFull : HeartEmpty} alt="Love This Charity!" onClick={this.favoriteCharity}/></div>
                <div className="charityInfoTable">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            {/* CHARITY NAME */}
                            <tr>
                                <td>
                                    <h1 style={{marginTop: -20, paddingBottom: 20}}>{this.props.charity.charity_name.toUpperCase()}</h1>
                                </td>
                            </tr>
                            {/* TAG LINE */}
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                            {/* MISSION STATEMENT */}
                            <tr>
                                <td><b className="orgLabel">MISSION STATEMENT</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{mission}</td>
                            </tr>
                            {/* CAUSE TYPE */}
                            <tr>
                                <td><b className="orgLabel">CAUSE TYPE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.cause}</td>
                            </tr>
                            {/* WEBSITE URL */}
                            <tr>
                                <td><b className="orgLabel">ORGANIZATION'S WEBSITE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}><a target="_blank" rel="noopener noreferrer" href={this.props.charity.website_url}>{this.props.charity.website_url}</a></td>
                            </tr>
                            {/* OVERALL RATING */}
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="orgLabel">OVERALL RATING:</b>&nbsp;&nbsp;{this.props.charity.current_rating}</td>
                            </tr>
                            {/* FINANCIAL RATING */}
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="orgLabel">FINANCIAL RATING:</b>&nbsp;&nbsp;{this.props.charity.financial_rating}</td>
                            </tr>
                            {/* ACCOUNTABILITY RATING */}
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="orgLabel">ACCOUNTABILITY RATING:</b>&nbsp;&nbsp;{this.props.charity.accountability_rating}</td>
                            </tr>
                            {/* INCOME */}
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="orgLabel">INCOME:</b>&nbsp;&nbsp;${this.props.charity.income_amount}</td>
                            </tr>
                            {/* MAILING ADDRESS */}
                            <tr>
                                <td><b className="orgLabel">MAILING ADDRESS</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>
                                    <p style={{lineHeight: .4}}>{this.props.charity.mailing_street_address}</p>
                                    {this.props.mailing_street_address_2 ? <p style={{lineHeight: .4}}>this.props.mailing_street_address</p> : ""}
                                    <p style={{lineHeight: .4}}>{this.props.charity.mailing_city}, {this.props.charity.mailing_zipcode}</p>
                                </td>
                            </tr>
                            {/* POINT OF CONTACT */}
                            <tr>
                                <td><b className="orgLabel">POINT OF CONTACT</b></td>
                            </tr>
                            <tr>
                                <td>{this.charityContact().first_name}&nbsp;{this.charityContact().last_name}</td>
                            </tr>
                            <tr>
                                <td className="dataProvidedBy"  style={{paddingTop: 150}}>Data provided by CharityNavigator API</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="moreInfo" style={{paddingTop: 10}}></div>
                    <div style={{paddingTop: 30, paddingBottom: 420, display: this.state.moreInfo ? "block" : "none"}}>
                        <h1>OPPORTUNITIES &amp; EVENTS</h1>
                        <div className="createBtnContainer">
                            <p className="createEventBtn" onClick={this.showEventForm}>CREATE AN EVENT</p>
                        </div>
                        <EventForm 
                            charity={this.props.charity} 
                            currentUser={this.props.currentUser} 
                            display={this.state.eventForm} 
                            eventForm={this.showEventForm} 
                            postEvent={this.postEvent}
                        />
                        {this.charityEvents()[0] ? 
                            this.charityEvents().map(event => 
                                <CharityEvents key={event.id} {...event} 
                                    eventsTable={this.state.moreInfo} 
                                />    
                            ) : 
                            <p>
                                {this.props.charity.charity_name} has no&nbsp;upcoming&nbsp;events.<br/>
                                Please check back later.
                            </p>
                        }
                    </div>
                </div>
                <div className="eventsDonateTable">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td width="45%" align="center"><a href="#moreInfo" className={this.state.moreInfo ? "charityGoBackBtn" : "charityEventsBtn"} onClick={this.showMoreInfo} >{this.state.moreInfo ? "CLOSE" : "EVENTS" }</a></td>
                                <td width="10%" align="center" className="spacer"></td>
                                <td width="45%" align="center" className="charityDonateBtn" onClick={this.showDonationForm}>DONATE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <DonationForm 
                    charity={this.props.charity} 
                    currentUser={this.props.currentUser} 
                    display={this.state.donationForm} 
                    donationForm={this.showDonationForm} 
                    donate={this.props.donate} 
                    newDonation={this.props.newDonation}
                />

            </div>
        )
    }
}