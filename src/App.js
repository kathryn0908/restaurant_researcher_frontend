import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantShowPage from './components/RestaurantShowPage';
import RestaurantContainer from './containers/RestaurantContainer';
import TrendingContainer from './containers/TrendingContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {

  state={
      restaurants:[],
      trending: []
  }

  componentDidMount(){
      this.getRestaurants()
      this.getTrending()
  }

  getRestaurants(){
    fetch('http://127.0.0.1:8000/restaurants/')
      .then(resp => resp.json())
      .then(restaurants => this.setState({restaurants}))
          
  }

  getTrending(){
    fetch('http://127.0.0.1:8000/trending/')
      .then(resp => resp.json())
      .then(trending => this.setState({trending}))
  }

  render(){
    return (
      <Router>
        <Switch>
        <Route  exact path='/' render={(props) => <Home {...props} trending={this.state.trending} restaurants={this.state.restaurants} />} />
        <Route path='/trendingrestaurants' render={(props) => <TrendingContainer {...props} trending={this.state.trending} />}/>
        <Route exact path='/restaurants' render={(props) => <RestaurantContainer {...props} restaurants={this.state.restaurants}/>}/>
        <Route path='/restaurants/:id' render={(props) => <RestaurantShowPage {...props} restaurants={this.state.restaurants}/>}/>
        </Switch>
      </Router>
     
    );
  }
}


