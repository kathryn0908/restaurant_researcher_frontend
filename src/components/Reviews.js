import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews(props){
    const displayReviews = (id) => {
        
        if(foundReviews > 1){
            foundReviews.map(review =>  <ReviewCard {...props} review={review} /> )
        } 
        else{
            return <ReviewCard {...props} review={foundReviews}/>
        }
    }

    return(
        <div>
            {displayReviews}
        </div>
    )
  
}


