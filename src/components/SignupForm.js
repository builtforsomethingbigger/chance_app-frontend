import React from 'react'
import '../styles/Signup.css';

export default class SignupForm extends React.Component{
    render(){
        return(
            <div id="signupForm" style={{display: this.props.display ? "inline-block" : "none"}}>
                <form>
                    <table width="90%" border="0" cellSpacing="0" cellPadding="10" align="center">
                        <tbody>
                            <tr>
                                <td width="40%" align="right">USERNAME:&nbsp;&nbsp;</td>
                                <td width="60%" align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">FIRST NAME:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">LAST NAME:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">BIRTHDAY:&nbsp;&nbsp;</td>
                                <td align="left"><input type="date" className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">EMAIL:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">STREET ADDRESS:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">APT/UNIT:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">CITY:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">ZIP:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">PHONE:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">CREDIT CARD NUMBER:&nbsp;&nbsp;</td>
                                <td align="left"><input className="signup-input"></input></td>
                            </tr>
                            <tr>
                                <td align="right">CREDIT CARD TYPE:&nbsp;&nbsp;</td>
                                <td align="left"><select className="select-input">
                                        <option default>select a card company</option>
                                        <option>AMERICAN EXPRESS</option>
                                        <option>MASTERCARD</option>
                                        <option>VISA</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">EXP DATE:&nbsp;&nbsp;</td>
                                <td align="left"><input type="month" className="signup-input"></input></td>
                            </tr>
                    </tbody>
                    </table>
                    <button type="submit" className="signup-submit">CREATE ACCOUNT</button>
                    <p className="signup-goBack" onClick={this.props.onClick}>GO BACK</p>
                </form>
            </div>
        )
    }
}