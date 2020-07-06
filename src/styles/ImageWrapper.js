import React, {Component} from 'react';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

export default class ImageWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {hovered: false};
    }
  
    render() {
      return (
        <div 
        className="restaurant-card"
        size="massive"
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{transform: `${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}>
          <h1>{this.props.restaurant.name}</h1>
          <img
          className='restaurant-image' 
          src={this.props.restaurant.thumb} 
          alt='thumbnail'
          />
        </div>
      );
    }
  }