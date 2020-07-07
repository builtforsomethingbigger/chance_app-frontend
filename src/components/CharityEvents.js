import React from 'react'
import '../styles/CharityEvents.css';

export default class CharityEvents extends React.Component{

    state = {
        display: false
    }

    showDescription = e => {
        if(this.state.display){
            this.setState({
                display: false
            })
        }else{
            this.setState({
                display: true
            })
        }
    }

    render(){
        const status = ["Pending Approval", "Client Approved"]
        return(
            <div id="moreInfoTable">
                <table onClick={this.showDescription} width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                    <tbody>
                        <tr>
                            <td className="eventLabel" width="30%" align="left"><b>DATE:</b>&nbsp;{this.props.event_date}</td>
                            <td className="eventLabel" width="30%" align="left"><b>TYPE:</b>&nbsp;{this.props.event_type}</td>
                            <td className="eventLabel" width="40%" align="left"><b>STATUS:</b>&nbsp;{status[Math.floor(Math.random()*status.length)]}</td>
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
                    <div className="respondBtn">RESPOND TO THIS</div>
                </div>
                <div className="eventResponseForm">
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