import React from 'react';
import { HomePage, Nav, CharityCard } from './components';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

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
        {/* <Switch>
          <Route path='/charities/:id' render={(routerProps) => <CharityCard {...routerProps} />} />
          <Route path='/signup' render={(routerProps) => <UserForm addNewUser={this.addNewUser} {...routerProps} />} />
          <Route path='/users/:id' component={CharitieshowPage} />
          <Route path='/users' render={() => <UsersPage authors={this.state.authors} Charities={this.state.Charities} />} /> 
        </Switch> */}
        <HomePage charities={this.state.charities} />
      </div>
    );
  }
}
