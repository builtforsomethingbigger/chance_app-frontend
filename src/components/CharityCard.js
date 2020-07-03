import React from 'react'
import HeartEmpty from '../images/heart_empty.gif'
import HeartFull from '../images/heart_full.gif'
import '../styles/CharityCard.css';

const favoritesAPI = 'http://localhost:3000/favorites'

export default class CharityCard extends React.Component{

    state = {
        moreInfo: false,
        favCharity: {}
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

    
    render(){
        console.log(this.props.charity.id)

        if(!this.props.charity.mission) return ''
        const mission = this.props.charity.mission.replace(/<br>/g, ' ')
        return(
            <div id="charityCard" className="chairtyInfoFont" style={{display: this.props.display ? "inline-block" : "none"}}>
                <div className="xClose xCharityCard" onClick={() => { this.hideMoreInfo(); this.props.onClick();}}>x</div>
                <div className="charityInfoTable">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            {/* CHARITY NAME */}
                            <tr>
                                <td><b className="orgLabel">ORGANIZATION'S NAME</b></td>
                            </tr>
                            <tr>
                                <td className="orgNameFont">{this.props.charity.charity_name}</td>
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
                        </tbody>
                    </table>
                    <div id="moreInfo"></div>
                    <table id="moreInfoTable" width="100%" border="0" cellSpacing="0" cellPadding="0" align="center" style={{display: this.state.moreInfo ? "initial" : "none"}}>
                        <tbody>
                            <tr>
                                <td style={{paddingBottom: 30}}><p className="moreInfoDivider">ADDITIONAL INFORMATION</p></td>
                            </tr>

                            <tr>
                                <td style={{paddingBottom: 30}}><b className="moreInfoLabel">FINANCIAL RATING:</b>&nbsp;&nbsp;{this.props.charity.financial_rating}</td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="moreInfoLabel">ACCOUNTABILITY RATING:</b>&nbsp;&nbsp;{this.props.charity.accountability_rating}</td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}><b className="moreInfoLabel">INCOME:</b>&nbsp;&nbsp;${this.props.charity.income_amount}</td>
                            </tr>
                            <tr>
                                <td><b className="moreInfoLabel">MAILING ADDRESS</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 300}}>
                                    <p style={{lineHeight: .4}}>{this.props.charity.mailing_street_address}</p>
                                    {this.props.mailing_street_address_2 ? <p style={{lineHeight: .4}}>this.props.mailing_street_address</p> : ""}
                                    <p style={{lineHeight: .4}}>{this.props.charity.mailing_city}, {this.props.charity.mailing_zipcode}</p>
                                </td>
                            </tr>
                            {/* <tr>
                                <td><b className="moreInfoLabel">MAILING ADDRESS</b></td>
                            </tr>
                            <tr>
                                <td>{this.props.charity.user_id}</td>
                            </tr> */}
                            <tr>
                                <td className="dataProvidedBy">Data provided by CharityNavigator API</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <div className="moreDonateTable">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td width="33%" align="left" className={this.state.moreInfo ? "charityLessInfoBtn" : "charityMoreInfoBtn"} onClick={this.showMoreInfo}>{this.state.moreInfo ? "LESS INFO" : <a href="#moreInfo" style={{textDecoration:"none", color:"white"}}>MORE INFO</a>}</td>
                                <td width="33%" align="center"><img className={`followHeart ${this.hearted() ? `followHearbeat` : ''}`} src={this.hearted() ? HeartFull : HeartEmpty} alt="Love This Charity!" onClick={this.favoriteCharity}/></td>
                                <td width="33%" align="right" className="charityDonateBtn">DONATE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                </div>
            </div>
        )
    }
}