import React, { Component } from 'react'
import SearchBar from '../styles/SearchBar'
import SearchResults from '../components/SearchResults'
import RestaurantCard from '../components/RestaurantCard'
import TrendingCard from '../components/TrendingCard'

export default class SearchContainer extends Component{
    state={
        term: ''
    }  
    onInputChange(term){
      this.setState({term});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.history.push(`/${this.state.term}`)
  
    }
  
    filterCards = () => {
      if(this.props.restaurants){
          return this.props.restaurants.filter(restaurant=>{
              return (
                  restaurant.name.toLowerCase().includes(this.state.term) 
              )
          })
      } else if(this.props.trending){
          return this.props.trending.filter(trending=>{
              return (
                  trending.title.toLowerCase().includes(this.state.term)
              )
          })
      }
    }
  
    searchResultsContainer = () => {
      if(this.props.restaurants){
          return this.filterCards().map(restaurant=>{
              return (<RestaurantCard restaurant={restaurant}/>)
          })
      } else if(this.props.trending){
          return this.filterCards().map(trending=>{
              return <TrendingCard trending={trending} />
          })
      }
    }
    render(){
        return(
            <SearchBar term={this.state.term} onInputChange={this.onInputChange} handleSubmit={this.handleSubmit}/>
            <SearchResults term={this.state.term} searchResultsContainer={this.searchResultsContainer}/>
        )
    }
}