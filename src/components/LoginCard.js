import React from 'react'
import { Link } from 'react-router-dom';

export default class LoginCard extends React.Component{

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = () => {
        const user = this.props.allUsers.find(user => user.username === this.state.username)
        return this.props.currentUser(user)
    }

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
                            <td><input className="login-input" type="text" name="username" value={this.state.username} onChange={this.onChangeHandler}></input></td>
                        </tr>
                        <tr>
                            <td className="padTop20">PASSWORD</td>
                        </tr>
                        <tr>
                            <td><input className="login-input" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}></input></td>
                        </tr>
                        <tr>
                            <td><Link to='/search' className="login-btn" onClick={() => this.onSubmitHandler()}>LOG IN</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}