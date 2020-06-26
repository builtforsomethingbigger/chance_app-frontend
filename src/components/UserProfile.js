import React from 'react'
import '../styles/UserProfile.css';

export default class UserProfile extends React.Component{
    render(){
        return(
            <div id="userProfile">
                <div><h1>PROPS.USERNAME</h1></div>
                <div className="profileInfoRow">
                    <h3>FIRST NAME</h3>
                    <p>PROPS.FIRSTNAME</p>
                </div>
                <div className="profileInfoRow">
                    <h3>LAST NAME</h3>
                    <p>PROPS.LASTNAME</p>
                </div>
                <div className="profileInfoRow">
                    <h3>EMAIL ADDRESS</h3>
                    <p>PROPS.EMAIL</p>
                </div>
            </div>
        )
    }
}