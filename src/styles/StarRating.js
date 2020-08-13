import React, {Component} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



export default class StarRating extends Component{

  state={
    value:""
  }

  handleClick = (event) => {
    const value = event.target.value
    this.setState({value: event.target.value})
    const user = localStorage.getItem('id')
    const restaurant = this.props.match.params.id
    this.props.addStarRating(value, user, restaurant)
  }
  

  render(){
    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={this.state.value} 
            onClick={this.handleClick}
          />
        </Box>
      </div>
    );
  }
}
