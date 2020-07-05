import React from 'react';
import { LoginPage, HomePage, Nav, UserProfile, CharitiesPage } from './components';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

const charityAPI = 'http://localhost:3000/charities'
const userAPI = 'http://localhost:3000/users'
const donationAPI = 'http://localhost:3000/donations'
const favoritesAPI = 'http://localhost:3000/favorites'

export default class App extends React.Component{

  state = {
    currentUser: {},
    users: [],
    charities: [],
    donations: [],
    favorites: [],
    selectedCharity: {}
}

  componentDidMount(){
    this.currentUser()
    this.fetchAllUsers()
    this.fetchAllCharities()
    this.fetchAllDonations()
    this.fetchAllFavorites()
  }

  currentUser = () => {
    fetch(`${userAPI}/1`)
    .then(res => res.json())
    .then(currentUser => this.setState({ currentUser }))
  }

  fetchAllUsers = () => {
    fetch(userAPI)
    .then(res => res.json())
    .then(users => this.setState({ users })
    ) 
  }

  fetchAllCharities = () => {
    fetch(charityAPI)
    .then(res => res.json())
    .then(charities => this.setState({ charities })
    ) 
  }

  fetchAllDonations = () => {
    fetch(donationAPI)
    .then(res => res.json())
    .then(donations => this.setState({ donations })
    ) 
  }

  fetchAllFavorites = () => {
    fetch(favoritesAPI)
    .then(res => res.json())
    .then(favorites => this.setState({ favorites })
    ) 
  }

  addNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
      currentUser: newUser
    })
  }

  newDonation = (donation) => {
    this.setState({
      donations: [...this.state.donations, donation]
    })
  }

  showLoginPage = e => {
    if(this.state.loginPage === false){
        this.setState({
            loginPage: true
        })
    }else{
        this.setState({
        loginPage: false
        })
    }
  }

  handleFavoriteClick = (id, boolean) => {
    if(boolean === true){
      this.setState({
        favorites: [...this.state.favorites, id]
      })
    }else{
      let newFavorites = this.state.favorites.filter(favorites => favorites.id !== id)
      this.setState({
        favorites: newFavorites
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} />
        <div id="homepage_wrapper">
          <Switch>
            <Route path='/search'  render={(routerProps) =>  
              <HomePage {...routerProps} 
                currentUser={this.state.currentUser} 
                allUsers={this.state.users}
                charities={this.state.charities} 
                donations={this.state.donations} 
                newDonation={this.newDonation} 
                favorites={this.state.favorites} 
                favClick={this.handleFavoriteClick}
              />
            }/>
            <Route path='/profile'  render={(routerProps) =>  
              <UserProfile {...routerProps} 
                currentUser={this.state.currentUser}
                charities={this.state.charities} 
                donations={this.state.donations} 
              />}
            />
            {/* <Route path='/charities/:id' name='charity' render={(routerProps) => {
              const beef = parseInt(routerProps.match.params.id)
              console.log(routerProps)
              return <CharityCard {...routerProps} currentUser={this.state.currentUser} charities={this.state.charities} donations={this.state.donations} favorites={this.state.favorites} charID={beef} />
            }} /> */}
            <Route path='/charities'  render={(routerProps) =>  <CharitiesPage {...routerProps} currentUser={this.state.currentUser} charities={this.state.charities} donations={this.state.donations} favorites={this.state.favorites} />} />
            <Route path='/' render={() => <LoginPage loginPage={this.showLoginPage} display={this.state.loginPage}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}
