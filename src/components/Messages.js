import React from 'react'

export default class Messages extends React.Component{

    state = {
        // senders: [],
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

    
    
    render(){
        const messages = this.props.messages.sort((a,b) => a.id - b.id).filter(messages => messages.message_title === this.props.title)
        // const sender = messages.
        return(
            <div id="messagesContainer">
                <div>
                    <h2 className="msgTitle" onClick={this.showMsgWindow}>{this.props.title}</h2>
                </div>
                <div className="messageWindow" style={{display: this.state.msgWindow ? "inline-block" : "none"}}>
                    {messages.sort((a,b) => a.id - b.id).map(msgBody => 
                    <div>
                        <div>
                            <table width="90%" border="0" cellSpacing="0" cellPadding="0" align="center">
                                <tr>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <h3>{msgBody.user.username}</h3>
                        <p>{msgBody.message_body}</p>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}
