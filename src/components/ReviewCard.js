import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function ReviewCard(props){

  
    return(
        <div className='review-card-container'>
            <h1 className='reviewer-username'>{localStorage.getItem('username')}</h1> <div className='review-star-rating'><div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="rating"
                        value={props.review.rating} 
                    />
                </Box>
                </div><p className='date'>{props.review.created_at.slice(0,10)}</p></div> 
            <p className='review-info'>{props.review.review}</p>
        </div>
    )
}