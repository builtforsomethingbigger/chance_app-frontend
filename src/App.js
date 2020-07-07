import React from 'react';
import { LoginPage, HomePage, Nav, UserProfile, CharitiesPage, CharityCard, Inbox } from './components';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

const charityAPI = 'http://localhost:3000/charities'
const userAPI = 'http://localhost:3000/users'
const donationAPI = 'http://localhost:3000/donations'
const favoritesAPI = 'http://localhost:3000/favorites'
const messageAPI = 'http://localhost:3000/messages'
const inboxAPI = 'http://localhost:3000/inboxes'

export default class App extends React.Component{

  state = {
    currentUser: {},
    users: [],
    charities: [],
    donations: [],
    favorites: [],
    messages: [],
    inboxes: [],
    selectedCharity: {},
    charityCard: false
  }

  /* FETCHES */
  componentDidMount(){
    this.currentUser()
    this.fetchAllUsers()
    this.fetchAllCharities()
    this.fetchAllDonations()
    this.fetchAllFavorites()
    this.fetchAllMessages()
    this.fetchAllInboxes()
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
  fetchAllMessages = () => {
    fetch(messageAPI)
    .then(res => res.json())
    .then(messages => this.setState({ messages })
    ) 
  }
  fetchAllInboxes = () => {
    fetch(inboxAPI)
    .then(res => res.json())
    .then(inboxes => this.setState({ inboxes })
    ) 
  }
  addNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
      currentUser: newUser
    })
  }
  
  /* LOG IN FUNCTIONS */
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
  
  /* CHARITY CARD FUNCTIONS */
  showCharityCard = (id) => {
    const findCharity = this.state.charities.find(charity => charity.id === id)
    if (this.state.charityCard === false){
      this.setState({
        selectedCharity: findCharity,
        charityCard: true
      })
    }
  }
  hideCharityCard = e => {
    this.setState({
      charityCard: false
    })
  }

  /* DONATION FUNCTIONS */
  newDonation = (donation) => {
    this.setState({
      donations: [...this.state.donations, donation]
    })
  }

  /* FAVORITE FUNCTIONS */
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

  /* MESSAGE FUNCTIONS */
  handlePostMsgClick = (message) => {
    this.setState({
      messages: [...this.state.messages, {...message, user: this.state.currentUser}]
    })
  }


  render(){
    const inbox = this.state.inboxes.find(inbox => inbox.user_id === this.state.currentUser.id)
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
                charityCard={this.showCharityCard}
              />
            }/>
            <Route path='/profile'  render={(routerProps) =>  
              <UserProfile {...routerProps} 
                currentUser={this.state.currentUser}
                charities={this.state.charities} 
                donations={this.state.donations} 
              />}
            />
            <Route path='/charities/:id' name='charity' render={(routerProps) => {
              const charityID = parseInt(routerProps.match.params.id)
              return <CharityCard {...routerProps} 
                display={this.state.charityCard} 
                charID={charityID} 
                currentUser={this.state.currentUser} 
                charity={this.state.selectedCharity} 
                allUsers={this.state.users}
                charities={this.state.charities}
                favorites={this.state.favorites} 
                favClick={this.handleFavoriteClick}
                newDonation={this.newDonation} 
                onClick={this.hideCharityCard} 
                postEvent={this.postEvent}
              />}} 
            />
            <Route path='/charities'  render={(routerProps) =>  
              <CharitiesPage {...routerProps} 
                currentUser={this.state.currentUser} 
                charities={this.state.charities} 
                donations={this.state.donations} 
                favorites={this.state.favorites}
                charityCard={this.showCharityCard}
              />} 
            />
            <Route path='/inbox' render={(routerProps) => 
              <Inbox {...routerProps} 
                currentUser={this.state.currentUser} 
                allUsers={this.state.users}
                inbox={this.showInbox} 
                display={this.state.inbox}
                userInbox={inbox}
                messages={this.state.messages}
                postMsg={this.handlePostMsgClick}
              />} 
            />
            <Route path='/' render={() => 
              <LoginPage 
                loginPage={this.showLoginPage} 
                display={this.state.loginPage}
              />} 
            />
          </Switch>
        </div>
      </div>
    );
  }
}
// display={this.state.charityCard} 
// charity={this.state.selectedCharity} 
// donationForm={this.state.donationForm} 
// favortied={this.state.hearted} 

// currentUser={this.state.currentUser} 
// allUsers={this.state.allUsers}
// charities={this.state.charities}
// favorites={this.state.favorites} 
// newDonation={this.state.newDonation} 
// favClick={this.state.favClick}

// onClick={this.hideCharityCard} 
// donate={this.showDonationForm} 
