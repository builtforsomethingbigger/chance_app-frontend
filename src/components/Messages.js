import React from 'react'

const messageAPI = 'http://localhost:3000/messages'
export default class Messages extends React.Component{

    state = {
        message_body: '',
        msgWindow: false
    }

    showMsgWindow = e => {
        if(this.state.msgWindow){
            this.setState({
                msgWindow: false
            })
        }else{
            this.setState({
                msgWindow: true
            })
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitMsg = e => {
        e.preventDefault()
        fetch(messageAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                inbox_id: this.props.messages[0].inbox_id,
                message_title: this.props.title,
                message_body: this.state.message_body
            })
        })
        .then(res => res.json())
        .then(message => this.props.postMsg(message))
        this.setState({
            message_body: ''
        })
    }
    
    
    render(){
        const messages = this.props.messages
            .sort((a,b) => a.id - b.id)
            .filter(messages => messages.message_title === this.props.title)
        return(
            <div id="messagesContainer">
                <div>
                    <h2 className="msgTitle" onClick={this.showMsgWindow}>{this.props.title}</h2>
                </div>
                <div className="messageWindow msgDropdown" style={{display: this.state.msgWindow ? "inline-block" : "none"}}>
                    <div className="messageInput">
                        <form onSubmit={this.submitMsg}>
                            <table width="100%" border="0" cellPadding="0" cellSpacing="0" align="center">
                                <tbody>
                                    <tr>
                                        <td width="100%" align="left"><input className="msgInput" type="text" name="message_body" value={this.state.message_body} onChange={this.handleOnChange}></input></td>
                                        <td className="sendBtn" align="left" onClick={this.submitMsg}>SEND</td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    {this.state.message_body ? <img className="ellipses" src="https://english.mathrubhumi.com/polopoly_fs/1.3376958.1544262349!/menu/standard/file/loading.gif"/> : ''}
                    {messages.sort((a,b) => b.id - a.id).map(msgBody => 
                    <div className="msgBody">
                        <h3>{msgBody.user.username}</h3>
                        <p>{msgBody.message_body}</p>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}
