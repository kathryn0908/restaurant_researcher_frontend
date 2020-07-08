import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from "@material-ui/core/styles";

export default function ReviewCard(props){

    const findUser = props.users.find(user => user.id == props.review.user)
    
    const useStyles = makeStyles({
        root: {
        //   marginTop:"-40px",
          marginLeft:"25%"
        }
      });
    
      const classes = useStyles();
  
    return(
        <div className='review-card-container'>
            <div className='review-title'>
            <h1 className='reviewer-username'>{findUser.username}</h1> <div className='review-star-rating'><div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        className={classes.root}
                        name="rating"
                        value={props.review.rating} 
                    />
                </Box>
                </div><p className='date'>{props.review.created_at.slice(0,10)}</p></div> 
                </div>
            <p className='review-info'>{props.review.review}</p>
        </div>
    )
}