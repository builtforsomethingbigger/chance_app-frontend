import React from 'react'
import '../styles/CharityEvents.css';

export default class CharityEvents extends React.Component{
    render(){
        return(
            <div id="moreInfoTable" style={{display: this.props.eventsTable ? "inline-block" : "none"}}>
                <table id="moreInfo" width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                    <tbody>
                        <tr>
                            <td className="eventLabel" width="38%" align="left"><b>DATE:</b>&nbsp;{this.props.event_date}</td>
                            <td className="eventLabel" width="62%" align="left"><b>TYPE:</b>&nbsp;{this.props.event_type}</td>
                        </tr>
                        <tr>
                            <td className="eventLabel" colSpan="2" align="left"><b>TITLE:</b>&nbsp;{this.props.event_title}</td>
                        </tr>
                        <tr>
                            <td className="eventLabel" colSpan="2" align="left"><b>DESCRIPTION:</b>&nbsp;{this.props.event_description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}