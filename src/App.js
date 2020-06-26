import React from 'react';
import './styles/App.css';
import { HomePage, Nav } from './components';

const API = 'http://localhost:3000/charities'

export default class App extends React.Component{

  state = {
    charities: [],
    index: 100
  }

  componentDidMount(){
    this.fetchAllCharities()
  }

  fetchAllCharities = () => {
    fetch(API)
    .then(res=>res.json())
    .then(charities => this.setState({ charities })
    ) 
  }




  render(){
    return (
      <div className="App">
        <Nav  />
        {/* <Nav value={this.state.searchInput} currentUser={this.state.currentUser} /> */}
        {/* <Switch>
          {/* <Route path='/charities/:id' render={(routerProps) => <CharitiesShowPage currentUser={this.state.currentUser} {...routerProps} />} />
          <Route path='/charities' render={() => <CharitiesPage />} />
          <Route path='/signup' render={(routerProps) => <UserForm addNewUser={this.addNewUser} {...routerProps} />} />
          <Route path='/users/:id' component={CharitieshowPage} />
          <Route path='/users' render={() => <UsersPage authors={this.state.authors} Charities={this.state.Charities} />} /> 
          <Route path="/" render={(routerProps) => <HomePage {...routerProps} displayRecentCharities={this.displayRecentCharities()} displaySearchedCharities={this.displaySearchedCharities()} />} />
        </Switch> */}
        <HomePage charities={this.state.charities} />
      </div>
    );
  }
}
