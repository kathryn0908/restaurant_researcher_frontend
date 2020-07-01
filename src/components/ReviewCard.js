import React from 'react'

export default function ReviewCard(props){

    return(
        <div className='reviews-container'>
            <h1>Reviews:</h1>
            <p>"{props.review.review}"-{props.review.user}</p>
        </div>
    )
}