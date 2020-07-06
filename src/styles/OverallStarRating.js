import React, {Component} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


export default class OverallStarRating extends Component{
  state={
    value:0
  }

  // handleChange = (event) => {
  //   this.props.ratings
  // }


  render(){
    return (
      
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={this.state.value} readOnly />
          {/* onChange={this.handleChange} /> */}
        </Box>
      
    );
  }
  
}

