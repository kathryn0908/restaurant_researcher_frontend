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
import { faUser, faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faUser, faTimesCircle, faCheck)

export default class App extends Component {

  state={
      restaurants:[],
      trending: [],
      reviews: [],
      favorites: [],
      user: {},
      users: []
  }

  componentDidMount(){
      this.getRestaurants()
      this.getTrending()
      this.getUsers()
      this.getReviews()
      this.getFavorites()
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

  getReviews(){
    fetch('http://127.0.0.1:8000/reviews/')
      .then(resp => resp.json())
      .then(reviews => this.setState({reviews}))
  }

  getFavorites(){
    fetch('http://127.0.0.1:8000/favorites/')
      .then(resp => resp.json())
      .then(favorites => this.setState({favorites}))
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
    // .then(res => console.log(res))
    .then(result => {
      localStorage.setItem('token', result.password)
      localStorage.setItem('id', result.id)
      localStorage.setItem('favorites', result.favorites)
      localStorage.setItem('reviews', result.reviews)
      localStorage.setItem('username', result.username)
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

  login = (username, email, password, history) => {
    const user = {username, email, password}
    localStorage.setItem('username', username)
    let u = this.state.users.find(user => localStorage.getItem('username') == user.username)
    if(u){
      localStorage.setItem('id', u.id)
      let reviews = u.reviews.map(u => u.review)
      localStorage['reviews'] = JSON.stringify(reviews)
      console.log(u)
    } 
    fetch('http://127.0.0.1:8000/login/',{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(result => {
      localStorage.setItem('token', result.access)
    })
    .then(result => {
        this.setState({user: result})
      history.push('/profile')
    })
  }

  addFavorite(newFavorite, user, restaurant){
    let foundFavorite = this.state.favorites.find(favorite => newFavorite.id === favorite.id)
    if(!foundFavorite){
      this.setState({favorites: [...this.state.favorites, newFavorite]})
    }

    const favorite = {
      favorite: newFavorite,
      user: user,
      restaurant: restaurant
    }

    fetch('http://127.0.0.1:8000/favorites/',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(favorite)
    })   
  }

  removeFavorite(id){
    let newFavorites = this.state.favorites.filter(favorite => favorite.id !== id)
    this.setState({favorites: newFavorites})

    fetch('http://127.0.0.1:8000/favorites/',{
      method: "DELETE",
    })
  }

  addReview = (review, user, name, id) => {
    fetch('http://127.0.0.1:8000/reviews/',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({review, user, name, id})
    }).then(resp => resp.json())
    .then(newReview => {
      console.log(newReview)
      this.setState({
        reviews: [...this.state.reviews, newReview]
      })
      })
  }

  removeReview(id){
    let newReviews = this.state.reviews.filter(review => review.id !== id)
    this.setState({reviews: newReviews})

    fetch('http://127.0.0.1:8000/reviews/',{
      method:"DELETE",
    })
    
  }

  render(){
    return (
      <Router>
        <Switch>
        <Route  exact path='/' render={(props) => <Home {...props} trending={this.state.trending} restaurants={this.state.restaurants} />} />
        <Route path='/trendingrestaurants' render={(props) => <TrendingContainer {...props} trending={this.state.trending} />}/>
        <Route exact path='/restaurants' render={(props) => <RestaurantContainer {...props} restaurants={this.state.restaurants} favorites={this.state.favorites} addFavorite={this.addFavorite} />}/>
        <Route path='/restaurants/:id' render={(props) => <RestaurantShowPage {...props} restaurants={this.state.restaurants}  addReview={this.addReview} reviews={this.state.reviews} favorites={this.state.favorites} addFavorite={this.addFavorite}/>}/>
        <Route path='/login' render={(props) => <Login {...props} login={this.login}/>}/>
        <Route path='/signup' render={(props) => <SignUp {...props} signup={this.signup}/>}/>
        <PrivateRoute exact path='/profile' users={this.state.users} addNewUser={this.addNewUser} favorites={this.state.favorites} reviews={this.state.reviews} removeFavorite={this.removeFavorite} restaurants={this.state.restaurants}/>
        </Switch>
      </Router>
     
    );
  }
}


