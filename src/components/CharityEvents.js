import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/CharityEvents.css';

const messageAPI = 'http://localhost:3000/messages'
export default class CharityEvents extends React.Component{

    state = {
        display: false,
        responseForm: false,
        responseMsg: ''
    }

    showDescription = e => {
        if(this.state.display && !this.state.responseForm){
            this.setState({
                display: false
            })
        }else{
            this.setState({
                display: true
            })
        }if(this.state.display && this.state.responseForm){
            this.setState({
                display: false,
                responseForm: false
            })
        }

    }

    showResponseForm = e => {
        if(this.state.responseForm){
            this.setState({
                responseForm: false
            })
        }else{
            this.setState({
                responseForm: true
            })
        }   
    }

    handleOnChange = e => {
        this.setState({
            responseMsg: e.target.value
        })
    }

    submitResponse = e => {
        e.preventDefault()
        const inboxUser = this.props.inboxes.find(inbox => inbox.user_id === this.props.currentUser.id)
        fetch(messageAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                inbox_id: inboxUser.id,
                message_title: `${this.props.event_date}: ${this.props.event_title}`,
                message_body: this.state.responseMsg,
                user: this.props.currentUser
            })
        })
        .then(res => res.json())
        .then(message => this.props.submitResponse(message))
        // .then(this.sentMsgConfirm())
        this.setState({
            message_body: ''
        })
        return this.showResponseForm()
    }

    // sentMsgConfirm = e => {
    //     this.props.sentMsgConfirm()
    // }

    render(){
        return(
            <div id="moreInfoTable">
                <table onClick={this.showDescription} width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                    <tbody>
                        <tr>
                            <td className="eventLabel" width="28%" align="left"><b>DATE:</b>&nbsp;{this.props.event_date}</td>
                            <td className="eventLabel" width="32%" align="left"><b>TYPE:</b>&nbsp;{this.props.event_type}</td>
                            <td className="eventLabel" width="40%" align="left"><b>STATUS:</b>&nbsp;{this.props.event_status}</td>
                        </tr>
                    </tbody>
                </table>
                <table onClick={this.showDescription} width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                    <tbody>
                        <tr>
                            <td className="eventLabel" width="100%" align="left"><b>TITLE:</b>&nbsp;{this.props.event_title}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="eventDescription" style={{display: this.state.display ? "block" : "none"}}>
                    <table onClick={this.showDescription} width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                        <tbody>
                            <tr>
                                <td className="eventLabel" width="100%" align="left"><b>DESCRIPTION:</b>&nbsp;{this.props.event_description}</td>
                            </tr>
                            <tr>
                                <td width="100%" align="center"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="respondBtn" onClick={this.showResponseForm}>RESPOND TO THIS</div>
                </div>
                <div className="eventResponseForm" style={{display: this.state.responseForm ? "block" : "none"}}>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center">
                        <tbody>
                            <tr>
                                <td className="eventLabel" align="center"><b>MESSAGE</b></td>
                            </tr>
                            <tr>
                                <td align="center" valign="top"><textarea className="responseInput" type="text" name="responseMsg" value={this.state.responseMsg} onChange={this.handleOnChange}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/charities/${this.props.charID}#moreInfo`}>
                    <button type="submit" className="respondBtn" onClick={this.submitResponse}>SEND</button>
                    </Link>
                </div>
            </div>

        )
    }
}