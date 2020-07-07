import React from 'react'
import '../styles/EventForm.css';

const eventsAPI = 'http://localhost:3000/events'
export default class Eventform extends React.Component{

    state = {
        e_date: '',
        e_title: '',
        e_type: '',
        e_description: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitEvent = e => {
        e.preventDefault()
        fetch(eventsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                charity_id: this.props.charity.id,
                event_date: this.state.e_date,
                event_title: this.state.e_title,
                event_type: this.state.e_type,
                event_description: this.state.e_description
            })
        })
        .then(res => res.json())
        .then(event => this.props.postEvent(event))
        this.setState({
            e_date: '',
            e_title: '',
            e_type: '',
            e_description: ''
        })
        return this.props.eventForm
    }


    render(){
        return(
            <div id="eventForm" className="dropdownAnimation" style={{display: this.props.display ? "inline-block" : "none"}}>
                 <form>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                        <tbody>
                            <tr>
                                <td width="40%" align="right">DATE:&nbsp;&nbsp;</td>
                                <td width="60%" align="left"><input type="date" className="signup-input" name="e_date" value={this.state.e_date} onChange={this.handleOnChange}></input></td>
                            </tr>
                            <tr>
                                <td align="right">TYPE:&nbsp;&nbsp;</td>
                                <td align="left">
                                    <select className="select-input" name="e_type" value={this.state.e_type} onChange={this.handleOnChange}>
                                        <option default>select a type</option>
                                        <option>EVENT</option>
                                        <option>OPPORTUNITY</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">TITLE:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input" type="text" name="e_title" value={this.state.e_title} onChange={this.handleOnChange}></input></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top">DESCRIPTION:&nbsp;&nbsp;</td>
                                <td align="left"><textarea className="textArea"  type="text" name="e_description" value={this.state.e_description} onChange={this.handleOnChange}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="signup-submit" onClick={(e) => {this.submitEvent(e); this.props.eventForm()}}>POST EVENT</button>
                    <p className="signup-goBack" onClick={this.props.eventForm}>GO BACK</p>
                </form>
            </div>
        )
    }
}