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
            <div className='order-online'>
                {/* <p className='order-link'>{props.restaurant.cuisines}</p> */}
                <a className='order-link' href={props.restaurant.url}>Order Online</a>
            </div>
            <div className='page-styling'>
                <p className='rest-info'>Hours of Operation: {props.restaurant.timings}</p>
                <p className='rest-info'>Phone number: {props.restaurant.phone_number}</p>
                <p className='rest-info'>Address: {props.restaurant.address}</p>
                <p className='rest-info'>Delivery: {props.restaurant.has_online_delivery.toString()}</p>
                <p className='rest-info'>Average Cost for Two: ${props.restaurant.average_cost_for_two}(approx)</p>
                <p className='rest-info'>Highlights: {props.restaurant.highlights}</p>
                <ReviewForm  {...props} addReview={props.addReview} reviews={props.reviews}/>
                <h1 className='review-header'>Reviews</h1>
                <div className='reviews-container'>
                {findReviews(props.match.params.id)} 
                </div>
            </div>
        </>
    )
}