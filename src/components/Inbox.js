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
        const messages = this.props.messages.filter(message => message.inbox_id === this.props.userInbox.id)
        return(
            <div id="inbox">
                <div className="xClose xInbox" onClick={() => { this.goBack()}}>x</div>
                <h1>MY MESSAGES</h1>
                <div id="inboxContainer">
                    <div className="inboxPanel">
                        {unique.map((title, index) => <Messages key={index} title={title} allUsers={this.props.allUsers} messages={this.props.messages} />   
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
