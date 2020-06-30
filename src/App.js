import React from 'react';
import { HomePage, Nav, LoginPage} from './components';
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
    userProfile: false
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
    fetch(`${userAPI}/76`)
    .then(res => res.json())
    .then(currentUser => this.setState({ currentUser }))
  }

  showUserProfile = () => {
    if(this.state.userProfile === false){
      this.setState({
          userProfile: true
      })
    }else{
      this.setState({
        userProfile: false
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} userProfile={this.showUserProfile} />
        {/* <HomePage charities={this.state.charities} currentUser={this.state.currentUser} donations={this.state.donations} userProfile={this.state.userProfile} onClick={this.showUserProfile}/> */}
        <Switch>
          <Route path='/login' render={() => <LoginPage loginPage={this.showLoginPage} display={this.state.loginPage}/>} />
          <Route path='/'  render={() =>  <HomePage  charities={this.state.charities} currentUser={this.state.currentUser} donations={this.state.donations} userProfile={this.state.userProfile} onClick={this.showUserProfile}/>} />
        </Switch>
      </div>
    );
  }
}
