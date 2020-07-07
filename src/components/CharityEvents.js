import React from 'react'
import '../styles/CharityEvents.css';

export default class CharityEvents extends React.Component{

    state = {
        display: false,
        responseForm: false
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
                                <td align="center" valign="top"><textarea className="responseInput" type="text" name="message" value={this.state.message} onChange={this.onChangeHandler}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="respondBtn">SEND</button>
                </div>
            </div>

        )
    }
}