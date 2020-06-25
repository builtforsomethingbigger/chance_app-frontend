import React from 'react';
import './styles/App.css';
import CharityData from './components/data/db.json'
import { HomePage, Nav } from './components';


export default class App extends React.Component{

  state = {
    charities: CharityData.splice(0-250),
    index: 100
  }

  // componentDidMount(){
  //   this.fetchAllCharities()
  // }

  // fetchAllCharities = () => {
  //   fetch(CharityData)
  //   .then(res=>res.json())
  //   .then(charities => {
  //     const allCharities = charities
  //     this.setState({
  //       charities: allCharities
  //     })
  //   } ) 
    
  // }


addCharityId = (array) => {
  for (i = 0; i < array.length; i++) { 
    array[i]["id"] = i;
  }   
}


  render(){
    console.log(this.state.charities)
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
        <HomePage charities={this.addCharityId(CharityData)} />
      </div>
    );
  }
}
