import React from 'react';
import StarRating from '../styles/StarRating';

export default function ReviewCard(props){

    return(
        <div className='review-card-container'>
            <h1 className='reviewer-username'>{localStorage.getItem('username')}</h1> <div className='review-star-rating'><StarRating/></div>
            <p className='review-info'>{props.review.review}</p>
        </div>
    )
}