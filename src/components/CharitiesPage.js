import React from 'react'
import FavoritedCharityCard from './FavoritedCharityCard'
import '../styles/CharitiesPage.css';

export default class CharitiesPage extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
        this.props.history.goBack();
    }

    userFavorites = () => {
        const faves = this.props.favorites.filter(favorites => favorites.user_id === this.props.currentUser.id)
        return faves 
    }
    
    render(){
        return(
            <div id="charitiesPage">
                <div className="xClose xCharitiesPage" onClick={this.goBack}>x</div>
                <h1>MY CHARITIES</h1>
                {this.userFavorites().map(favorites => <FavoritedCharityCard key={favorites.id} {...favorites} charities={this.props.charities} currentUser={this.props.currentUser} />)}
            </div>
        )
    }
}