import React from 'react'
import ChanceLogo from './ChanceLogo'
import MainMenu from './MainMenu'
import { Link } from 'react-router-dom';
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
                    <Link to="/search">
                        <ChanceLogo />
                    </Link>
                </div>
                <div>
                    <p className="menuBtn" onClick={this.clickHandler}>☰ MENU ☰</p>
                </div>
                <div className="middle">
                    <MainMenu 
                        onMouseLeave={this.mouseOut} 
                        display={this.state.display} 
                        currentUser={this.props.currentUser} 
                        clearUser={this.props.clearUser}
                    />
                </div>
            </div>
        )
    }
}