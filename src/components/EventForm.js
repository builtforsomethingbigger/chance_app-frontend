import React from 'react'
import '../styles/EventForm.css';

export default class Eventform extends React.Component{
    render(){
        return(
            <div id="eventForm" className="dropdownAnimation" style={{display: this.props.display ? "inline-block" : "none"}}>
                 <form>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="10" align="center">
                        <tbody>
                            <tr>
                                <td width="40%" align="right">DATE:&nbsp;&nbsp;</td>
                                <td width="60%" align="left"><input type="date" className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">TYPE:&nbsp;&nbsp;</td>
                                <td align="left">
                                    <select className="select-input">
                                        <option default>select a type</option>
                                        <option>EVENT</option>
                                        <option>OPPORTUNITY</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">TITLE:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input" type="text"></input></td>
                            </tr>
                            <tr>
                                <td align="right">DESCRIPTION:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input" type="text"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="signup-submit">POST EVENT</button>
                    <p className="signup-goBack" onClick={this.props.onClick}>GO BACK</p>
                </form>
            </div>
        )
    }
}