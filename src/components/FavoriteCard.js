import React, { Component } from 'react'

export default class FavoriteCard extends Component{
  constructor(props) {
      super(props);
      this.state = {hovered: false};
    }
  
  handleClick = () => {
      this.props.history.push(`/restaurants/${this.props.favorite.restaurant}`)
  }
  
  removeFavorite =() => {
      this.props.removeFavorite(this.props.favorite.id)
  }

  restaurantInfo = () =>{
      let r = this.props.restaurants.filter(restaurant => restaurant.id == this.props.favorite.restaurant)
      return r.map(r => {
            return(
            <div {...this.props} className="favorite-card"  onClick={this.handleClick} size="massive"
              onMouseOut={() => this.setState({hovered: false})}
              onMouseOver={() => this.setState({hovered: true})}
              style={{transform: `${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}>
              <h1 className='favorite-name'>{r.name}</h1>
              <img {...this.props} className='restaurant-image' src={r.thumb} alt='thumbnail'/>
              <button className='remove-favorite' onClick={this.removeFavorite}>Remove</button>
            </div>

        )
      })
  }

  render(){
    return(
        <>
        {this.restaurantInfo()}
        </>
    )
  }   
}