import React from 'react'
import { Link } from 'react-router-dom';

export default class LoginCard extends React.Component{
    render(){
        return(
            <div id="loginCard">
                <table width="100%" border="0" cellPadding="0" cellSpacing="0" align="center">
                    <tbody>
                        <tr>
                            <td className="loginCard-header">MEMBER LOG IN</td>
                        </tr>
                        <tr>
                            <td className="padTop20">USERNAME</td>
                        </tr>                        
                        <tr>
                            <td><input className="login-input"></input></td>
                        </tr>
                        <tr>
                            <td className="padTop20">PASSWORD</td>
                        </tr>
                        <tr>
                            <td><input className="login-input"></input></td>
                        </tr>
                        <tr>
                            <td><Link to='/search' className="login-btn">LOG IN</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}