import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantShowPage from './components/RestaurantShowPage';
import RestaurantContainer from './containers/RestaurantContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {

    state={
      restaurants:[]
  }

  componentDidMount(){
      this.getRestaurants()
  }

  getRestaurants(){
    fetch('http://127.0.0.1:8000/restaurants/')
          .then(resp => resp.json())
          .then(restaurants => this.setState({restaurants}))
  }
  render(){
    return (
      <Router>
        <Switch>
        <>
        <Route  exact path='/' component={Home}/>
        <Route path='/trendingrestaurants' component={RestaurantContainer} restaurants={this.state.restaurants}/>
          
        </>
        </Switch>
      </Router>
     
    );
  }
}


