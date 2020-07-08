import React, {Component} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from "@material-ui/core/styles";


export default function OverallStarRating(props){
  

  const displayOverallRating = () => {
    const restaurantRatings = props.ratings.filter(rating => rating.restaurant == props.restaurant)
  
    const ratings = restaurantRatings.map(rating => rating.value)
    

    if (ratings.length > 1){
     const averageRating = ratings.reduce(function(sum, value){
        return sum + value;
     }, 0)/ratings.length;
    
      return (
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating className={classes.root} name="read-only" value={averageRating} readOnly />
      </Box>
      )
    }
    else if(ratings.length == 1){
      return (
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating className={classes.root} name="read-only" value={restaurantRatings[0].value} readOnly />
      </Box>
      )

    }

    else{
      return (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating className={classes.root} name="read-only" value={0} readOnly />
        </Box>
      )
    }
  }

 const useStyles = makeStyles({
    root: {
      fontSize:'30px'
    }
  });

  const classes = useStyles();
    return(
      <>
      {displayOverallRating()}
      </>
    )
}

