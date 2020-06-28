import React from 'react'
import HeartEmpty from '../images/heart_empty.gif'
import HeartFull from '../images/heart_full.gif'
import '../styles/CharityCard.css';

export default class CharityCard extends React.Component{
    render(){
        return(
            <div id="charityCard" className="chairtyInfoFont" style={{zIndex: this.props.display ? 1 : -1}}>
                <div className="xClose xCharityCard" onClick={this.props.onClick}>x</div>
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
                                <td style={{paddingBottom: 30}}>{this.props.charity.mission}</td>
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
                                <td style={{paddingBottom: 30}}><a target="_blank" href={this.props.charity.website_url}>{this.props.charity.website_url}</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="moreInfoTable" width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                            <tr>
                                <td><b className="orgLabel">TAG LINE</b></td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom: 30}}>{this.props.charity.tag_line}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td width="50%" align="left" className="charityMoreInfoBtn">MORE INFO</td>
                                <td width="50%" align="right" className="charityDonateBtn">DONATE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="ratingLikeTable">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td width="50%" align="left"><b className="orgLabel">RATING:</b>&nbsp;&nbsp;{this.props.charity.current_rating}</td>
                                <td width="50%" align="right"><img className="followHeart" src={HeartEmpty} alt="Love This Charity!"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}