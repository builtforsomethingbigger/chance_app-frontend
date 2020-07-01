import React from 'react';
import { LoginPage, HomePage, Nav, UserProfile, CharitiesPage } from './components';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

const charityAPI = 'http://localhost:3000/charities'
const userAPI = 'http://localhost:3000/users'
const donationAPI = 'http://localhost:3000/donations'

export default class App extends React.Component{

  state = {
    charities: [],
    donations: [],
    currentUser: {},
    selectedCharity: {}
}

  componentDidMount(){
    this.fetchAllCharities()
    this.fetchAllDonations()
    this.currentUser()
  }

  fetchAllCharities = () => {
    fetch(charityAPI)
    .then(res=>res.json())
    .then(charities => this.setState({ charities })
    ) 
  }

  fetchAllDonations = () => {
    fetch(donationAPI)
    .then(res=>res.json())
    .then(donations => this.setState({ donations })
    ) 
  }

  addNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
      currentUser: newUser
    })
  }

  currentUser = () => {
    fetch(`${userAPI}/1`)
    .then(res => res.json())
    .then(currentUser => this.setState({ currentUser }))
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

  render(){
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} userProfile={this.showUserProfile} />
        <div id="homepage_wrapper">
          <Switch>
            <Route path='/search'  render={(routerProps) =>  <HomePage {...routerProps} charities={this.state.charities} currentUser={this.state.currentUser} donations={this.state.donations} userProfile={this.state.userProfile} onClick={this.showUserProfile}/>} />
            <Route path='/profile'  render={(routerProps) =>  <UserProfile {...routerProps} currentUser={this.state.currentUser} charities={this.state.charities} donations={this.state.donations} />} />
            <Route path='/charities'  render={(routerProps) =>  <CharitiesPage {...routerProps} currentUser={this.state.currentUser} charities={this.state.charities} donations={this.state.donations} />} />
            <Route path='/' render={() => <LoginPage loginPage={this.showLoginPage} display={this.state.loginPage}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}
