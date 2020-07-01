import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'

export default function Restaurant(props){

    const findReviews = (id) => {
        const foundReview = props.reviews.filter( (review) => {
            return review.restaurant == id;
         })
        return foundReview.map((review) => {
             return <ReviewCard review={review} />
         })
     }

    return(
        <>
            <div className='name-con'>
            <h1 className='name'>{props.restaurant.name}</h1>
            </div>
            <div className='page-styling'>
                <p>Hours of Operation: {props.restaurant.timings}</p>
                <p>Phone number: {props.restaurant.phone_number}</p>
                <p>Address: {props.restaurant.address}</p>
                <p>Delivery: {props.restaurant.has_online_delivery.toString()}</p>
                <p>Average Cost for Two: ${props.restaurant.average_cost_for_two}(approx)</p>
                <p>Highlights: {props.restaurant.highlights}</p>
                <a href={props.restaurant.url}>Order Online</a>
                <ReviewForm  {...props} addReview={props.addReview} reviews={props.reviews}/>
                {findReviews(props.match.params.id)} 
            </div>
        </>
    )
}