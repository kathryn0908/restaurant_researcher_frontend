import React from 'react'

export default function ReviewCard(props){

    return(
        <div className='review-card-container'>
            <h1 className='reviewer-username'>{localStorage.getItem('username')}</h1>
            <p className='review-info'>{props.review.review}</p>
        </div>
    )
}