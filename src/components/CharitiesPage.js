import React from 'react'
import SearchCard from './SearchCard'
import '../styles/CharitiesPage.css';

const favoritesAPI = 'http://localhost:3000/favorites'
export default class CharitiesPage extends React.Component{

    state = {
        favorites: [],
        userFavorites: []
    }

    componentDidMount(){
        this.fetchAllFavorites()
    }    

    fetchAllFavorites = () => {
        fetch(favoritesAPI)
        .then(res=>res.json())
        .then(favorites => this.setState({ favorites })
        ) 
    }

    userFavorites = () => {
        const faves = this.state.favorites.filter(favorites => favorites.user_id === this.props.currentUser.id)
        this.setState({
            userFavorites: faves
        })
    }

    userCharities = () => {
        this.props.charities.map(charity => charity.id === this.state.userFavorites.charity_id)
    }
    
    render(){
        console.log(this.userCharities())
        return(
            <div id="charitiesPage">
                <div className="xClose xCharitiesPage" onClick={this.goBack}>x</div>
                <h1>MY CHARITIES</h1>
                {/* {this.userCharities().map(favorite => <SearchCard id={favorite.id} {...favorite} />)} */}
            </div>
        )
    }
}