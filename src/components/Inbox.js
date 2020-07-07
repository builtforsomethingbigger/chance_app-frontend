import React from 'react'
import Messages from './Messages'
import '../styles/Inbox.css'

export default class Inbox extends React.Component{

    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
        this.props.history.goBack();
    }
        
    render(){
        const sender = this.props.messages.map(messages => messages.message_title)
        const unique = sender.filter((v, i, a) => a.indexOf(v) === i)
        if(!this.props.messages || !this.props.userInbox) return ''
        return(
            <div id="inbox">
                <div className="xClose xInbox" onClick={() => { this.goBack()}}>x</div>
                <h1>MY MESSAGES</h1>
                <div id="inboxContainer">
                    <div className="inboxPanel">
                        {unique.reverse().map((title, index) => 
                            <Messages key={index} id={index} 
                                title={title} 
                                currentUser={this.props.currentUser}
                                allUsers={this.props.allUsers} 
                                messages={this.props.messages} 
                                inbox={this.props.userInbox.id}
                                postMsg={this.props.postMsg}
                            />   
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
