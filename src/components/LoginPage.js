import React from 'react'
import LoginCard from './LoginCard'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom';
import '../styles/Login.css';


export default class LoginPage extends React.Component{

    state = {
        displayLoginPage: true,
        signupForm: false
    }

    exitLogin = e => {
        this.setState({
            displayLoginPage: false
        })
    }

    showSignup = e => {
        if(this.state.signupForm === false){
            this.setState({
                signupForm: true
            })
        }else{
            this.setState({
                signupForm: false
            })
        }
    }

    render(){
        return(
            <div id="loginPage">
                <h1>WELCOME TO THE CHANCE APP</h1>
                <h2 className="login-header">THE PHILANTHROPIC SOCIAL NETWORK<br/>WITH A MISSION: TO MAKE CHANGE</h2>
                <p className="login-signup-text">If you are a returning member, please log in below. <br/>
                    New to Chance? <span className="signup-link" onClick={this.showSignup}>Create a new account</span>!
                </p>
                <LoginCard 
                    loginPage={this.props.loginPage} 
                    allUsers={this.props.allUsers} 
                    currentUser={this.props.currentUser}     
                />
                <p className="login-signup-text">Not interested in a membership? That's okay with us!<br/>The Chance app is <b>FREE</b> to use as a charitable organization directory.<br/>
                    <br/>
                    If you wish to continue as a guest, <Link to='/search' className="signup-link">click here</Link>.
                </p>
                <SignupForm 
                    display={this.state.signupForm} 
                    onClick={this.showSignup}
                />
            </div>
        )
    }
}