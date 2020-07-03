import React from 'react';
import RestaurantCard from '../components/RestaurantCard'
import TrendingCard from '../components/TrendingCard'


class SearchBar extends React.Component {
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
              restaurant.name.toLowerCase().includes(this.state.term) || restaurant.cuisines.toLowerCase().includes(this.state.term)
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
          return (<RestaurantCard {...this.props} restaurant={restaurant}/>)
      })
  } else if(this.props.trending){
      return this.filterCards().map(trending=>{
          return <TrendingCard {...this.props} trending={trending} />
      })
  }
}


    render() {
      
        return (
          <>
            <div className="search-container">
                <div className="search-box">
                    <form>
                        <input  className="search-input" id="search" type="text" placeholder="Search" value={this.state.term}
                            onChange={event=>this.onInputChange(event.target.value)} />
                        {/* <input type="submit" className='submit' /> */}
                    </form>
                </div>
            </div>
            <div className="searchresults-container">
              {this.state.term 
              ? this.searchResultsContainer()
              : null}
         </div>
          </>
        );
    }
}
 
export default SearchBar;