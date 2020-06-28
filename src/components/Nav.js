import React from 'react'
import MainMenu from './MainMenu'
import '../styles/Nav.css';

export default class Nav extends React.Component{

    state={
        display: false
    }

    clickHandler = e => {
        if(this.state.display === true){
            this.setState({
                display: false
            })
        }else{
            this.setState({
                display: true
            })
        }
    }

    mouseOut = e => {
        if(this.state.display === true){
            this.setState({
                display: false
            })
        }else{
            this.setState({
                display: true
            })
        }
    }

    render(){
        return(
            <div id="Nav">
                <div>
                    <i id="ChanceLogo" className="icon" />
                </div>
                <div>
                    <p className="menuBtn" onClick={this.clickHandler}>☰ MENU ☰</p>
                </div>
                <div className="middle">
                    <MainMenu onMouseLeave={this.mouseOut} display={this.state.display} />
                </div>
            </div>
        )
    }
}