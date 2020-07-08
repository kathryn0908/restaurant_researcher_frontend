import React, {Component} from 'react';
import RestaurantCard from '../components/RestaurantCard'




export default class RatingsFilter extends Component{
    
    state = {
        value: 'Sort StarRatings'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    sortRatingByAsc = () => {
         this.props.ratings.sort((a, b) => (a.value - b.value))
      };
      

    sortRatingByDesc = () => {
        this.props.ratings.sort((a, b) => (b.value - a.value))
    }
      

    render(){
        // console.log(this.props.ratings)
        return(
            <>
            <div>
                   <select id="lang" onChange={this.handleChange} value={this.state.value} >
                      <option value="Sort StarRatings">Sort StarRatings</option>
                      <option value="Ascending" onClick={this.sortRatingByAsc}>Ascending Order</option>
                      <option value="Descending"onClick={this.sortRatingByDesc}>Descending Order</option>
                   </select>
               </div>
            </>
        )
  
    }
}
