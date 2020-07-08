import React from 'react';
import RestaurantCard from '../components/RestaurantCard'
import TrendingCard from '../components/TrendingCard'
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import RatingsFilter from './RatingsFilter'


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
              restaurant.name.toLowerCase().includes(this.state.term) 
            //   || restaurant.cuisines.toLowerCase().includes(this.state.term) 
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
       return (
            <RestaurantCard {...this.props} restaurant={restaurant} ratings={this.props.ratings}/>
          )
      })
  } else if(this.props.trending){
      return this.filterCards().map(trending=>{
          return <TrendingCard {...this.props} trending={trending} />
      })
  }
}




// scrollToResults = () => {
//     this.results.current.scrollIntoView({ behavior: "smooth" });
//   }

// sortRatingByAsc = () => {
//     if(this.props.restaurants.reviews){
//         const results = this.filterCards().map(restaurant => restaurant.reviews[0].rating)
//         console.log(results)
//     }

    // const ratingsA = results..sort((a, b) => (a.value - b.value))
//  };
 

// sortRatingByDesc = () => {
//    this.props.ratings.sort((a, b) => (b.value - a.value))
// }



    render() {
      
        return (
          <>
            <div className="search-container">
                <div className="search-box">
                    <form className="search-box">
                        <input  className="search-input" id="search" type="text" placeholder="Search" value={this.state.term}
                            onChange={event=>this.onInputChange(event.target.value)} />
                    </form>
                </div>
            </div>
            <div className="searchresults-container">
              {this.state.term 
              ? <>
                    {/* <div className="results-div"> */}
                    {/* <h1 className='results'>Results</h1> */}
                    
                    {/* <RatingsFilter ratings={this.props.ratings} restaurants={this.props.restaurants} term={this.props.term}/> */}
                    {/* </div> */}
                    {this.searchResultsContainer()}
                </>
              : null}
         </div>
          </>
        );
    }
}
 
export default SearchBar;