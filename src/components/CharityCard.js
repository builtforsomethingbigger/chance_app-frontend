import React from 'react'
import '../styles/CharityCard.css';

export default class CharityCard extends React.Component{
    render(){
        return(
            <div id="charityCard" style={{zIndex: this.props.display ? 1 : -1}}>
                <div className="xClose xCharityCard" onClick={this.props.onClick}>x</div>
                <div>{this.props.charity.charity_name}</div>
            </div>
        )
    }
}