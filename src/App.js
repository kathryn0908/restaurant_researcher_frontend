import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantShowPage from './components/RestaurantShowPage';
import RestaurantContainer from './containers/RestaurantContainer';
import TrendingContainer from './containers/TrendingContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'
import PrivateRoute from './containers/PrivateRoute'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {

  state={
      restaurants:[],
      trending: [],
      reviews: [],
      favorites: [],
      userReviews: [],
      user: {},
      users: []
  }

  componentDidMount(){
      this.getRestaurants()
      this.getTrending()
      this.getUsers()
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

  getUsers(){
    fetch('http://127.0.0.1:8000/users/')
      .then(resp => resp.json())
      .then(users => this.setState({users}))
  }

  signup = (user, history) => {
    fetch('http://127.0.0.1:8000/users/',{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(result => {
      localStorage.setItem('token', result.password)
      this.setState({
        user: result
      })
      this.addNewUser(this.state.user)
      history.push('/profile')
    })

  }

  addNewUser(newUser){
    this.setState({users: [...this.state.users, newUser]})
  }

  login = (user, history) => {
     
    fetch('http://127.0.0.1:8000/login/',{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
      localStorage.setItem('token', user.access)
      this.setState({
          user: user
      })
      history.push('/profile')
    })
  }

  render(){
    return (
      <Router>
        <Switch>
        <Route  exact path='/' render={(props) => <Home {...props} trending={this.state.trending} restaurants={this.state.restaurants} />} />
        <Route path='/trendingrestaurants' render={(props) => <TrendingContainer {...props} trending={this.state.trending} />}/>
        <Route exact path='/restaurants' render={(props) => <RestaurantContainer {...props} restaurants={this.state.restaurants}/>}/>
        <Route path='/restaurants/:id' render={(props) => <RestaurantShowPage {...props} restaurants={this.state.restaurants}/>}/>
        <Route path='/login' render={(props) => <Login {...props} login={this.login}/>}/>
        <Route path='/signup' render={(props) => <SignUp {...props} signup={this.signup}/>}/>
        <PrivateRoute exact path='/profile' addNewUser={this.addNewUser}/>
        </Switch>
      </Router>
     
    );
  }
}


